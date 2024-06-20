// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export async function POST(request: NextRequest): Promise<NextResponse> {
    
  const data = {"dt":{"31":"Baccarat Deluxe"},"err":null}

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
