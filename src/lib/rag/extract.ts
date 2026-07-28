export async function extractTextFromFile(
  buffer: Buffer,
  fileName: string,
  mimeType?: string
): Promise<string> {
  const lower = fileName.toLowerCase();
  const type = (mimeType || "").toLowerCase();

  if (lower.endsWith(".txt") || lower.endsWith(".md") || type.startsWith("text/")) {
    return buffer.toString("utf8");
  }

  if (lower.endsWith(".pdf") || type === "application/pdf") {
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    await parser.destroy();
    return (result.text || "").trim();
  }

  if (
    lower.endsWith(".docx") ||
    type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const mammoth = await import("mammoth");
    const result = await mammoth.extractRawText({ buffer });
    return (result.value || "").trim();
  }

  throw new Error("Unsupported file type. Upload PDF, DOCX, TXT, or MD.");
}
