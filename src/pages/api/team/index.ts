import { ResponseFuncs, Team } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const handleCase: ResponseFuncs = {
        GET: async (req: NextApiRequest, res: NextApiResponse<Team[]>) => {
            res.json([
                {
                    id: 1,
                    name: "4. Etap Okuma Grubu",
                    isActive: true
                },
                {
                    id: 2,
                    name: "2. Etap Okuma Grubu",
                    isActive: true
                }
            ]);
        },

        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).end();
        },
    }

    const response = handleCase[method]
    if (response) response(req, res)
    else res.status(400).json({ error: "No Response for This Request" })
}

export default handler;