/* Generates one real page per product: product/<slug>/index.html
   plus sitemap.xml and robots.txt.
   Run after adding or editing products in js/products.js:   node build-products.js
   Each page uses product.html as its template, so the design stays in one place. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://brookindia.com/';          // change here if the domain changes
const SITE_NAME = 'Brook Water Purifiers';

const root = __dirname;
const code = fs.readFileSync(path.join(root, 'js/products.js'), 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(code + ';this.PRODUCTS = PRODUCTS;', ctx);
const products = ctx.PRODUCTS;

const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const template = fs.readFileSync(path.join(root, 'product.html'), 'utf8');
const trim = (t, n) => t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';

function seoBlock(p) {
  const url = SITE + 'product/' + p.slug + '/';
  const img = SITE + p.image;
  const title = trim(`${p.name} – ${p.cat} | ${SITE_NAME}`, 70);
  const price = p.price != null ? ` Price ₹${p.price.toLocaleString('en-IN')}.` : '';
  const desc = trim(p.desc || `${p.name} – ${p.cat} from ${SITE_NAME}, Kerala.${price} Enquire for details, installation and service.`, 160);

  const ld = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: p.name, image: img, category: p.cat, description: desc,
    brand: { '@type': 'Brand', name: 'Brook' }, url
  };
  if (p.price != null) ld.offers = { '@type': 'Offer', priceCurrency: 'INR', price: String(p.price), url, availability: 'https://schema.org/InStock' };

  return `<!-- SEO -->
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow">
<meta name="author" content="Brook Total Water Management Solutions">
<link rel="canonical" href="${url}">

<!-- Open Graph / Social Sharing -->
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${img}">
<meta property="og:image:alt" content="${esc(p.name)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="product">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="en_IN">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${img}">
<meta name="twitter:image:alt" content="${esc(p.name)}">
<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

// Remove old generated folders so deleted products do not leave stale pages
const outRoot = path.join(root, 'product');
fs.rmSync(outRoot, { recursive: true, force: true });

const seen = new Set();
for (const p of products) {
  if (!p.slug || seen.has(p.slug)) throw new Error('Missing or duplicate slug: ' + p.name);
  seen.add(p.slug);

  const html = template
    .replace('<head>', '<head>\n<base href="../../">')
    .replace(/<!--SEO-->[\s\S]*?<!--\/SEO-->/, '<!--SEO-->\n' + seoBlock(p) + '\n<!--/SEO-->')
    .replace('<body data-page="products">', `<body data-page="products" data-slug="${esc(p.slug)}">`);

  const dir = path.join(outRoot, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// sitemap.xml and robots.txt
const today = new Date().toISOString().slice(0, 10);
const urls = ['', 'about.html', 'products.html', 'services.html', 'contact.html']
  .map(u => SITE + u).concat(products.map(p => SITE + 'product/' + p.slug + '/'));
fs.writeFileSync(path.join(root, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);

console.log('Generated ' + products.length + ' product pages, sitemap.xml and robots.txt');
