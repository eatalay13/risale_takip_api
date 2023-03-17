import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json([
        {
            id: 1,
            teamId: 1,
            firstName: "Emrah",
            lastName: "Atalay",
            username: "eatalay13",
            password: "",
            isActive: true
        },
        {
            id: 2,
            teamId: 2,
            firstName: "Cemal",
            lastName: "bey",
            username: "cemal",
            password: "",
            isActive: true
        }
    ]);
}

export async function POST(req: Request) {
    return new NextResponse();
}