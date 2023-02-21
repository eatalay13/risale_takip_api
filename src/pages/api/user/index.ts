import { ResponseFuncs, User } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const handleCase: ResponseFuncs = {
        GET: async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
            res.json([
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