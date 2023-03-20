import type { NextApiRequest, NextApiResponse } from 'next';

import { topic } from '../../localData/topic';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ topic });
}
