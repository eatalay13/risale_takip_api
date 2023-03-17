import { Team } from "@/types/team";
import { connect } from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET(req: Request, params: { params: { id: String } }) {
    let id = params.params.id;
    
    if (!id)
        return;

    var { teamModel } = await connect();

    let team = await teamModel.findOne().where({ id: id });

    return NextResponse.json(team as Team);
}