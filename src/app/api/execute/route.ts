// src/app/api/execute/route.ts — JDoodle (200 free runs/day, permanent)
import { NextRequest, NextResponse } from "next/server";

// JDoodle language + version IDs
// Full list: https://www.jdoodle.com/compiler-api/
const JDOODLE_LANGUAGE_MAP: Record<number, { language: string; versionIndex: string }> = {
  63: { language: "nodejs",      versionIndex: "4" },
  74: { language: "typescript",  versionIndex: "0" },
  71: { language: "python3",     versionIndex: "4" },
  62: { language: "java",        versionIndex: "4" },
  60: { language: "go",          versionIndex: "4" },
  73: { language: "rust",        versionIndex: "4" },
  54: { language: "cpp17",       versionIndex: "1" },
  51: { language: "csharp",      versionIndex: "4" },
  72: { language: "ruby",        versionIndex: "4" },
  83: { language: "swift",       versionIndex: "4" },
};

export async function POST(req: NextRequest) {
  try {
    const { languageId, code, stdin } = await req.json();

    if (!languageId || !code) {
      return NextResponse.json({ error: "Missing languageId or code" }, { status: 400 });
    }

    const clientId     = process.env.JDOODLE_CLIENT_ID;
    const clientSecret = process.env.JDOODLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "JDoodle credentials not configured" }, { status: 500 });
    }

    const lang = JDOODLE_LANGUAGE_MAP[languageId];
    if (!lang) {
      return NextResponse.json({ error: "Unsupported language" }, { status: 400 });
    }

    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId,
        clientSecret,
        script: code,
        stdin: stdin || "",
        language: lang.language,
        versionIndex: lang.versionIndex,
      }),
    });

    const result = await response.json();
    console.log("JDoodle result:", result);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    const hasError = result.statusCode !== 200;

    return NextResponse.json({
      stdout: hasError ? "" : (result.output || ""),
      stderr: hasError ? (result.output || "Error") : "",
      compile_output: "",
      status: hasError ? "Error" : "Accepted",
    });
  } catch (err) {
    console.error("Execute route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}