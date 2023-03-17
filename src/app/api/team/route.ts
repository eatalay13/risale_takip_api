import { connect } from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET() {
    var { teamModel } = await connect();
    return NextResponse.json(await teamModel.find({}));
}

export async function POST() {
    var { teamModel } = await connect();

    await teamModel.create({
        id: 2,
        name: "3. Etap Okuma Grubu",
        isActive: true
    });
    
    return new Response();
}