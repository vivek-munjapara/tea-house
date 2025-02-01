import { NextResponse } from "next/server";
import menuinfo from './header.json';

 
export async function GET() { 
  return NextResponse.json(menuinfo)
}
 
