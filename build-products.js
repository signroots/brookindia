/* Generates one real page per product: product/<slug>/index.html
   Run after adding or editing products in js/products.js:   node build-products.js
   Each page uses product.html as its template, so the design stays in one place. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const code = fs.readFileSync(path.join(root, 'js/products.js'), 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(code + ';this.PRODUCTS = PRODUCTS;', ctx);
const products = ctx.PRODUCTS;

const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const template = fs.readFileSync(path.join(root, 'product.html'), 'utf8');

// Remove old generated folders so deleted products do not leave stale pages
const outRoot = path.join(root, 'product');
fs.rmSync(outRoot, { recursive: true, force: true });

const seen = new Set();
for (const p of products) {
  if (!p.slug || seen.has(p.slug)) throw new Error('Missing or duplicate slug: ' + p.name);
  seen.add(p.slug);

  const html = template
    .replace('<head>', '<head>\n<base href="../../">')
    .replace(/<title>.*?<\/title>/, `<title>${esc(p.name)} | Brook India</title>`)
    .replace(/<meta name="description" content="[^"]*">/,
             `<meta name="description" content="${esc(p.name)} - ${esc(p.cat)} by Brook India.">`)
    .replace('<body data-page="products">', `<body data-page="products" data-slug="${esc(p.slug)}">`);

  const dir = path.join(outRoot, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
console.log('Generated ' + products.length + ' product pages in /product');
