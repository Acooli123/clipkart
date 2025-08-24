export async function GET() {
  return new Response(
    JSON.stringify([700001, 700002, 700003, 700004, 700005]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}