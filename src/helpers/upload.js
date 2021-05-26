import PdfPrinter from "pdfmake";
import { getBlogPosts, writeBlogs, writeBlogCovers } from "../helpers/files.js";
import fs from "fs-extra";
const { readJSON, writeJSON, writeFile, createReadStream } = fs;
export const generatePDFStream = (data) => {
  const fonts = {
    Roboto: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  };

  const printer = new PdfPrinter(fonts);

  const docDefinition = {
    content: [getBlogPosts()],
  };

  const options = {
    // ...
  };

  const pdfReadableStream = printer.createPdfKitDocument(
    docDefinition,
    options
  );
  pdfReadableStream.end();

  return pdfReadableStream;
};
