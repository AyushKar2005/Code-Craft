import { Monaco } from "@monaco-editor/react";
import { Theme } from "@/types";

// ONLY the LanguageConfig type and LANGUAGE_CONFIG change.
// Replace the top of the file (type + config object) with this.
// THEMES, THEME_DEFINITONS, defineMonacoThemes stay 100% untouched.

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string }; // kept for type compat, unused
    judge0Id: number; // ✅ NEW
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    judge0Id: 63, // ✅
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    judge0Id: 74, // ✅
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}
class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}
  sum(): number { return this.numbers.reduce((acc, curr) => acc + curr, 0); }
  squares(): number[] { return this.numbers.map(n => n * n); }
  evenNumbers(): number[] { return this.numbers.filter(n => n % 2 === 0); }
}
const math = new MathOperations([1, 2, 3, 4, 5]);
console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    judge0Id: 71, // ✅
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")
print(f"Sum of numbers: {sum(numbers)}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    judge0Id: 62, // ✅
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      System.out.print("Original numbers: ");
      for (int n : numbers) System.out.print(n + " ");
      System.out.println();
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) squares[i] = numbers[i] * numbers[i];
      System.out.print("Squared numbers: ");
      for (int n : squares) System.out.print(n + " ");
      System.out.println();
      System.out.print("Even numbers: ");
      for (int n : numbers) if (n % 2 == 0) System.out.print(n + " ");
      System.out.println();
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    judge0Id: 60, // ✅
    monacoLanguage: "go",
    defaultCode: `package main
import "fmt"
func main() {
  numbers := []int{1, 2, 3, 4, 5}
  fmt.Println("Original numbers:", numbers)
  squares := make([]int, len(numbers))
  for i, n := range numbers { squares[i] = n * n }
  fmt.Println("Squared numbers:", squares)
  var evenNumbers []int
  for _, n := range numbers { if n%2 == 0 { evenNumbers = append(evenNumbers, n) } }
  fmt.Println("Even numbers:", evenNumbers)
  sum := 0
  for _, n := range numbers { sum += n }
  fmt.Println("Sum of numbers:", sum)
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    judge0Id: 73, // ✅
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    println!("Original numbers: {:?}", numbers);
    let squares: Vec<i32> = numbers.iter().map(|&n| n * n).collect();
    println!("Squared numbers: {:?}", squares);
    let even_numbers: Vec<i32> = numbers.iter().filter(|&&n| n % 2 == 0).cloned().collect();
    println!("Even numbers: {:?}", even_numbers);
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    judge0Id: 54, // ✅
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <numeric>
int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    std::cout << "Even numbers: ";
    for (int n : numbers) if (n % 2 == 0) std::cout << n << " ";
    std::cout << std::endl;
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    judge0Id: 51, // ✅
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;
class Program {
    static void Main() {
        int[] numbers = { 1, 2, 3, 4, 5 };
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        Console.WriteLine($"Sum of numbers: {numbers.Sum()}");
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    judge0Id: 72, // ✅
    monacoLanguage: "ruby",
    defaultCode: `numbers = [1, 2, 3, 4, 5]
puts "Original numbers: #{numbers.join(' ')}"
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"
puts "Sum of numbers: #{numbers.sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    judge0Id: 83, // ✅
    monacoLanguage: "swift",
    defaultCode: `let numbers = [1, 2, 3, 4, 5]
print("Original numbers: \\(numbers)")
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
  { id: "neon-night", label: "Neon Night", color: "#0f111a" }, // if not already added
  { id: "retro-terminal", label: "Retro Terminal", color: "#000000" } // ✅ NEW
];


export const THEME_DEFINITONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
  "neon-night": {
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    { "token": "comment", "foreground": "5ef1f2" },
    { "token": "string", "foreground": "ff6ac1" },
    { "token": "keyword", "foreground": "18faff" },
    { "token": "number", "foreground": "ffd866" },
    { "token": "type", "foreground": "78dce8" },
    { "token": "class", "foreground": "ff9d00" },
    { "token": "function", "foreground": "a9dc76" },
    { "token": "variable", "foreground": "ff6188" },
    { "token": "operator", "foreground": "fc9867" }
  ],
  "colors": {
    "editor.background": "#0f111a",
    "editor.foreground": "#f8f8f2",
    "editorLineNumber.foreground": "#44475a",
    "editor.selectionBackground": "#343746",
    "editor.lineHighlightBackground": "#1a1c25",
    "editorCursor.foreground": "#ffcc00",
    "editor.selectionHighlightBackground": "#45475a"
  }
},
"retro-terminal": {
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    { "token": "comment", "foreground": "00aa00" },
    { "token": "string", "foreground": "00ff00" },
    { "token": "keyword", "foreground": "00ff00", "fontStyle": "bold" },
    { "token": "number", "foreground": "55ff55" },
    { "token": "type", "foreground": "00ff99" },
    { "token": "class", "foreground": "00ff99" },
    { "token": "function", "foreground": "66ff66" },
    { "token": "variable", "foreground": "00ff00" },
    { "token": "operator", "foreground": "00ff00" }
  ],
  "colors": {
    "editor.background": "#000000",
    "editor.foreground": "#00ff00",
    "editorLineNumber.foreground": "#007700",
    "editor.selectionBackground": "#003300",
    "editor.lineHighlightBackground": "#001100",
    "editorCursor.foreground": "#00ff00",
    "editor.selectionHighlightBackground": "#003300"
  }
},


};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
       base: themeData.base as import("monaco-editor").editor.BuiltinTheme,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};