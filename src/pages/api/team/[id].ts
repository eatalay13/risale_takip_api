import { connect } from "@/utils/connection";
import { ResponseFuncs, Team } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
    
    const handleCase: ResponseFuncs = {
        GET: async (req: NextApiRequest, res: NextApiResponse<Team>) => {
            var { id } = req.query;

            if (!id)
                res.status(404).end();

            var { teamModel } = await connect();

            let team = await teamModel.findOne().where({ id: id });

            res.send(team as Team);
        }
    }

    const response = handleCase[method]
    if (response) response(req, res)
    else res.status(400).send({ error: "No Response for This Request" })
}

export default handler;