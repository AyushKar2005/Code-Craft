"use client";

import { useRef, useState, useCallback } from "react";
import EditorPanel from "./EditorPanel";
import OutputPanel from "./OutputPanel";

export default function ResizableLayout() {
  const [editorWidth, setEditorWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    setEditorWidth(Math.min(Math.max(percent, 20), 80));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  return (
    <>
      {/* Desktop: resizable */}
      <div
        ref={containerRef}
        className="hidden lg:flex items-start"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div style={{ width: `${editorWidth}%` }} className="flex-shrink-0">
          <EditorPanel />
        </div>

        {/* Drag handle */}
        <div
          onMouseDown={handleMouseDown}
          className="w-3 mx-1 self-stretch flex items-center justify-center cursor-col-resize group flex-shrink-0"
        >
          <div className="w-0.5 h-full bg-white/10 group-hover:bg-blue-500/60 transition-colors rounded-full" />
        </div>

        <div style={{ width: `${100 - editorWidth}%` }} className="flex-shrink-0">
          <OutputPanel />
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="flex lg:hidden flex-col gap-4">
        <EditorPanel />
        <OutputPanel />
      </div>
    </>
  );
}