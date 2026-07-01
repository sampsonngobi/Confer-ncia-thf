import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const distDir = join(__dirname, 'dist');
const sourceDir = __dirname;
const staticDir = fs.existsSync(join(distDir, 'index.html')) ? distDir : sourceDir;

// Serve the built app in production, but fall back to source files locally.
app.use(express.static(staticDir));

// Handle SPA routing - serve index.html for all routes that don't match static files
app.get('*', (req, res) => {
    res.sendFile(join(staticDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
