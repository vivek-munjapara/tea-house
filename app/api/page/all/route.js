import { NextResponse } from "next/server";
import info from './info.json';


export async function GET() {
	return NextResponse.json(info);
}