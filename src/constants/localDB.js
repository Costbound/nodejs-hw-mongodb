import path from 'node:path';
import fs from 'node:fs/promises';

export const PATH_DB = path.join(
  process.cwd(),
  'src',
  'db',
  'localeDB',
  'contacts.json',
);
const dbJson = await fs.readFile(PATH_DB, 'utf8');
console.log('aaaaaaaaaaaaaaaaaa', dbJson);
export const DB_DATA = JSON.parse(dbJson);
