import path from 'path';
import fs from 'fs';

export default function writeData(data, filename) {
  const dataDir = path.join(process.cwd(), 'data');
  const storagePath = path.join(dataDir, filename);

  // Ensure the 'data' directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(storagePath, data);
}
