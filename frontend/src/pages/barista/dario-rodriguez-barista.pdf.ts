import { renderBaristaPdfBuffer } from "../../lib/baristaPdf";

export const prerender = true;

export const GET = async () => {
  const pdfBuffer = await renderBaristaPdfBuffer();

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
