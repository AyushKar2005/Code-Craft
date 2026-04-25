// src/store/useCodeEditorStore.tsx
// ✅ FULL REPLACEMENT - only runCode() changes, everything else identical

import { create } from 'zustand';
import type { editor } from 'monaco-editor';
import { LANGUAGE_CONFIG } from '@/app/(root)/_constants';
import { ExecutionResult } from '@/types';

interface CodeEditorState {
  language: string;
  fontSize: number;
  theme: string;
  output: string;
  isRunning: boolean;
  editor: editor.IStandaloneCodeEditor | null;
  error: string | null;
  executionResult: ExecutionResult | null;
  stdin: string;

  getValue: () => string;
  setValue: (value: string) => void;

  setEditor: (editor: editor.IStandaloneCodeEditor | null) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  setLanguage: (language: string) => void;
  setStdin: (value: string) => void;

  runCode: () => Promise<void>;
}

const getInitialState = () => {
  if (typeof window === "undefined") {
    return { language: "javascript", fontSize: 16, theme: "vs-dark" };
  }
  return {
    language: localStorage.getItem("editor-language") || "javascript",
    theme: localStorage.getItem("editor-theme") || "vs-dark",
    fontSize: Number(localStorage.getItem("editor-font-size") || 16),
  };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    editor: null,
    error: null,
    executionResult: null,
    stdin: "",

    getValue: () => get().editor?.getValue() || "",
    setValue: (value) => get().editor?.setValue(value),

    setEditor: (editorInstance) => {
      const savedCode = localStorage.getItem(`editor-code-${get().language}`);
      if (savedCode && editorInstance) editorInstance.setValue(savedCode);
      set({ editor: editorInstance });
    },

    setTheme: (theme) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    setFontSize: (fontSize) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language) => {
      const currentCode = get().editor?.getValue();
      if (currentCode) localStorage.setItem(`editor-code-${get().language}`, currentCode);
      localStorage.setItem("editor-language", language);
      set({ language, output: "", error: null });
    },

    setStdin: (value: string) => set({ stdin: value }),

    // ✅ ONLY THIS FUNCTION CHANGED
    runCode: async () => {
      const { language, getValue, stdin } = get();
      const code = getValue();

      if (!code) {
        set({ error: "Please enter some code" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const languageId = LANGUAGE_CONFIG[language].judge0Id;

        const response = await fetch("/api/execute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ languageId, code, stdin }),
        });

        const data = await response.json();

        if (!response.ok) {
          const error = data.error || "Execution failed";
          set({ error, executionResult: { code, output: "", error } });
          return;
        }

        // Compile error (C++, Java, etc.)
        if (data.compile_output) {
          set({
            error: data.compile_output,
            executionResult: { code, output: "", error: data.compile_output },
          });
          return;
        }

        // Runtime error
        if (data.stderr) {
          set({
            error: data.stderr,
            executionResult: { code, output: "", error: data.stderr },
          });
          return;
        }

        // Success
        const output = (data.stdout || "").trim();
        set({
          output,
          error: null,
          executionResult: { code, output, error: null },
        });
      } catch (error) {
        console.error("error running code:", error);
        set({
          error: "Error running code",
          executionResult: { code, output: "", error: "Error running code" },
        });
      } finally {
        set({ isRunning: false });
      }
    },
  };
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;
