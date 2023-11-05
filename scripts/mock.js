/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const filename = args[0];
const pathname = path.join('pages', 'api', 'mock', `${filename}.ts`);

const placeholder = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line no-console
  console.log(
    \`⚠️  This is a mock API endpoint. For the real API endpoint: ▶️ \${req.url?.replace(
      '/api/mock',
      ''
    )}
    toggle the mock flag in the .env file to false.\n\`
  );
  res.status(200).json({ message: 'Hello World' });
}
`;

const createFile = async () => {
  const directory = path.dirname(pathname);

  if (!fs.existsSync(directory)) {
    await fs.mkdirSync(directory, { recursive: true });
  }

  if (!fs.existsSync(pathname)) {
    fs.writeFileSync(pathname, placeholder);
    console.log(`✅ ~File created: ${pathname}`);
  } else {
    console.log(`❌ ~File already exists: ${pathname}`);
  }
};

createFile();
