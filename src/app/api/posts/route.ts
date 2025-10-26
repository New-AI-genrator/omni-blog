import { NextResponse } from 'next/server';

export async function GET() {
  // Will connect to Sanity CMS here
  return NextResponse.json({ posts: [] });
}
