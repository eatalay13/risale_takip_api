import { connect } from "@/utils/connection";
import { ResponseFuncs, Team } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const handleCase: ResponseFuncs = {
        GET: async (req: NextApiRequest, res: NextApiResponse<Team[]>) => {
            var { teamModel } = await connect();
            res.send(await teamModel.find({}));
        },

        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            var { teamModel } = await connect();

            await teamModel.create({
                id: 2,
                name: "3. Etap Okuma Grubu",
                isActive: true
            });
            res.status(200).end();
        },
    }

    const response = handleCase[method]
    if (response) response(req, res)
    else res.status(400).send({ error: "No Response for This Request" })
}

export default handler;