// Copies the PDF.js engine into www/ so the app works offline.
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build');
const dst = path.join(__dirname, '..', 'www');
fs.mkdirSync(dst, { recursive: true });

['pdf.min.js', 'pdf.worker.min.js'].forEach((f) => {
  const from = path.join(src, f);
  if (!fs.existsSync(from)) {
    console.error('Missing ' + from + ' - run "npm install" first.');
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(dst, f));
  console.log('Copied ' + f);
});
