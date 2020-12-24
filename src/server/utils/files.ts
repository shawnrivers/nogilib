import * as fs from 'fs';

export function writeJSONFile(path: string, data: any[]) {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }

    console.log(`JSON saved in: ${path}`);
  });
}
