import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const folderPath = './markdown/protections'; 
    const files = fs.readdirSync(folderPath);
    const fileNames = files.map((file) => path.parse(file).name);
    res.status(200).json(fileNames);
  }
