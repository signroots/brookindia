/* Single product page: one template for every product.
   Reads ?id=<slug> from the URL and fills in data from PRODUCTS (js/products.js).
   Optional fields per product in products.js:
     desc:     'Short description text'
     features: ['Feature one', 'Feature two']
*/
(function () {
  const $ = s => document.querySelector(s);
  const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  /* Clean URL pages (product/<slug>/) carry the slug on <body data-slug>.
     Old links like product.html?id=<slug> still work and are sent to the clean URL. */
  const fromQuery = new URLSearchParams(location.search).get('id');
  const id = document.body.dataset.slug || fromQuery;
  const p = PRODUCTS.find(x => x.slug === id);
  const box = $('#product');

  if (p && !document.body.dataset.slug) {
    location.replace('product/' + encodeURIComponent(p.slug) + '/');
    return;
  }

  if (!p) {
    $('.crumbs').remove();
    box.innerHTML = '<h1 class="page-title">Product not found</h1>' +
      '<p>Sorry, we could not find that product. <a href="products.html">View all products</a></p>';
    document.title = 'Product not found | Brook India';
    return;
  }


  const crumbCat = $('#crumbCat');
  crumbCat.textContent = p.cat;
  crumbCat.href = 'products.html?cat=' + encodeURIComponent(p.cat);
  $('#crumbName').textContent = p.name;

  // Trimmed (less white space) image is used on mobile only; desktop uses the normal image
  const detailImg = 'images/products/detail/' + p.image.split('/').pop();

  const waText = encodeURIComponent('Hi, I am interested in ' + p.name + ' (' + p.cat + '). Please share more details.');
  const desc = p.desc
    ? '<p>' + esc(p.desc) + '</p>'
    : '<p>For specifications, availability and installation details, please contact our team.</p>';
  const features = Array.isArray(p.features) && p.features.length
    ? '<ul class="dots">' + p.features.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>'
    : '';

  box.innerHTML = `
    <div class="row g-5 align-items-start">
      <div class="col-md-6">
        <div class="pd-img">
          <picture>
            <source media="(max-width: 576px)" srcset="${esc(detailImg)}">
            <img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="${fallback}">
          </picture>
        </div>
      </div>
      <div class="col-md-6">
        <a class="pd-cat" href="products.html?cat=${encodeURIComponent(p.cat)}">${esc(p.cat)}</a>
        <h1 class="pd-name">${esc(p.name)}</h1>
        <div class="pd-price">${p.price != null ? money(p.price) : 'Price on request'}</div>
        ${desc}
        ${features}
        <div class="pd-actions">
          <a href="contact.html" class="btn btn-primary btn-pill-lg">Enquire Now</a>
          <a href="https://wa.me/919746100300?text=${waText}" class="btn btn-outline-primary btn-pill-lg" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp me-2"></i>WhatsApp</a>
          <a href="tel:9746100300" class="btn btn-outline-primary btn-pill-lg"><i class="bi bi-telephone me-2"></i>Call</a>
        </div>
      </div>
    </div>`;

  const related = PRODUCTS.filter(x => x.cat === p.cat && x.slug !== p.slug).slice(0, 4);
  if (related.length) {
    $('#relatedGrid').innerHTML = related.map(x => cardHTML(x, false)).join('');
    $('#related').classList.remove('d-none');
  }
})();
