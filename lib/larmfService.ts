import { Larmf } from '@/utils/larmfInterfaces';
import fs from 'fs';
import path from 'path';

export function readLarmfData(filename: string): Larmf[] {
    let filePath = path.join(process.cwd(), 'public', filename);
    let rawData = fs.readFileSync(filePath, 'utf-8');
    let data: Larmf[] = JSON.parse(rawData);
    return data;
}