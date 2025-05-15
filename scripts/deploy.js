// scripts/deploy.js
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
  const distDir = path.resolve(__dirname, '../dist');
  const srcIndex = path.join(distDir, 'index.html');
  const dest404 = path.join(distDir, '404.html');

  try {
    await fs.copy(srcIndex, dest404);
    console.log('✅ Created 404.html successfully!');
  } catch (err) {
    console.error('❌ Failed to create 404.html:', err);
  }
}

deploy();