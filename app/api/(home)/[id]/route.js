import { data } from "../../data";

export async function GET(Request, { params }) {
  const { id } = await params;

  const foundData = data.find((datas) => datas.id == id);

  console.log(foundData);

  if (foundData === undefined) {
    return new Response(
      JSON.stringify({ success: false, error: "Data not found" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  return new Response(JSON.stringify(foundData), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function PATCH(Request, { params }) {
  const { id } = await params;
  const { message } = await Request.json();
  console.log(id);

  var findData = data.find((d) => d.id == id);

  if (!findData) {
    return new Response(
      JSON.stringify({ success: false, error: "Data not found" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  }

  findData.message = message;
  return Response.json({ data });
}
