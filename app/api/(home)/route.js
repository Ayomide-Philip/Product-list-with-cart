import { data } from "../data";

export async function GET() {
  return Response.json({ data });
}

export async function POST(Request) {
  const request = await Request.json();
  data.push({
    id: data.length + 1,
    message: request.message,
  });
  return new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
