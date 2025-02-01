import { NextResponse } from "next/server";
import info from './info.json';
//import submit from './submit.json';


export async function GET() {
	return NextResponse.json(info);
}

// export async function POST() {
// 	return NextResponse.json(submit);
// }