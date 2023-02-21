import type { NextApiRequest, NextApiResponse } from "next";

type Team = {
    id: number
    name: string,
    isActive: boolean
}

function handler(req: NextApiRequest, res: NextApiResponse<Team[]>) {
    res.status(200).json([
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
}

export default handler;
