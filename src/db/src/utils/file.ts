import * as fs from 'fs';

export function writeJSONFile(path: string, data: any) {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }

    // eslint-disable-next-line no-console
    console.log(`JSON saved in: ${path}`);
  });
}
