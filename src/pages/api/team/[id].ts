
import type { NextApiRequest, NextApiResponse } from "next";

type Team = {
    name: string,
    isActive: boolean
}

function handler(req: NextApiRequest, res: NextApiResponse<Team>) {

}

export default handler;