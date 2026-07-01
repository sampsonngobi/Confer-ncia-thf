import fs from 'fs'
import path from 'path'

const srcDir = './src/assets/images'
const destDir = './dist/assets'

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
}

// Copy all files from src to dest
const files = fs.readdirSync(srcDir)
files.forEach(file => {
    const src = path.join(srcDir, file)
    const dest = path.join(destDir, file)
    fs.copyFileSync(src, dest)
    console.log(`Copied ${file} to dist/assets/`)
})

console.log(`\n✓ All assets copied to dist/assets`)
