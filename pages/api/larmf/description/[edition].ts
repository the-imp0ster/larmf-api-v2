
import { NextApiRequest, NextApiResponse } from 'next';
import { readLarmfData } from '@/lib/larmfService';
import describe_traits from '@/utils/describeTraits';
import { Larmf } from '@/utils/larmfInterfaces';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (!request.query.edition) {
        return response.status(400).send('Edition number is required');
    }

    let editionNumber = parseInt(request.query.edition as string, 10);
    if (isNaN(editionNumber)) {
        return response.status(400).send('Edition number must be a valid number');
    }

    let data: Larmf[] = readLarmfData('larmf_metadata.json');
    let larmf = data.find(item => item.edition === editionNumber);

    if (larmf) {
        let description = describe_traits(larmf);
        response.send(description);
    } else {
        response.status(404).send('Larmf not found');
    }
}
