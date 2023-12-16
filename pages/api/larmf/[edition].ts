import { NextApiRequest, NextApiResponse } from "next";
import { readLarmfData } from "@/lib/larmfService";
import { Larmf } from "@/utils/larmfInterfaces";

// •┈••✦ ❤ ✦••┈• get larmf by id
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (!request.query.edition) {
        return response.status(400).send('Edition number is required');
    }

    let editionNumber = parseInt(request.query.edition as string, 10);
    if (isNaN(editionNumber)) {
        return response.status(400).send('edition number must be a valid number');
    }

    let data: Larmf[] = readLarmfData('larmf_metadata.json');
    let larmf = data.find((item: Larmf) => item.edition === editionNumber);

    if (larmf) {
        response.json(larmf);
    } else {
        response.status(404).send('larmf not found');
    }


}