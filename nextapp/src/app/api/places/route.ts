import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  
  const url = new URL(request.url);
  const text = url.searchParams.get("text");
  const response = await fetch(`http://host.docker.internal:3000/places?text=${text}`, {
    next: {
      revalidate: 1, // Raramenete muda. Pode ser um cache bem grande 60
    },
  });
  console.log("Bateu na rota dentro do NEXT");
  const data = await response.json();
  console.log(data);
  return NextResponse.json(await response.json());
}