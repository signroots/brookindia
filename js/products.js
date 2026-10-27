/* Product data and rendering. Put photos in images/products/<slug>.jpg */
const CATS = ['Basic UV UF Filters','RO Filters 8 LPH','RO Purifier 10 LPH','RO Purifier 15 LPH','RO Premium','RO Under Sink','Comercial RO','Industrial RO','Iron Removal & Softener Plants','Racold Solar Water Heater','SS Dispensers','Swimming Pool'];
const PRODUCTS = [
{
name: 'GD Pro',
cat: 'RO Purifier 10 LPH',
price: 15999,
slug: 'gd-pro',
image: 'images/products/gd-pro-Picsart-AiImageEnhancer-350x350.jpg'
},
{
name: 'Jade',
cat: 'RO Purifier 10 LPH',
price: 14999.00,
slug: 'jade',
image: 'images/products/Jade-350x350.png'
},
{
name: 'Strom',
cat: 'RO Purifier 10 LPH',
price:15999.00,
slug: 'strom',
image: 'images/products/Strom-350x350.png'
},
{
name: 'Silver LX ONE',
cat: 'RO Purifier 15 LPH',
price:17999.00,
slug: 'silverlx',
image: 'images/products/sliver-lx-1-350x350.jpg'
},
{
name: '2090 White / Black',
cat: 'RO Purifier 15 LPH',
price:16999.00,
slug: '2090-white-black',
image: 'images/products/2090-white-black-2-350x350.jpg'
},
{
name: 'Apple Purex',
cat: 'RO Purifier 15 LPH',
price:17999.00,
slug: 'apple-purex',
image: 'images/products/apple-purex-350x350.jpg'
},
{
name: 'Eliza',
cat: 'RO Purifier 15 LPH',
price:18999.00,
slug: 'eliza',
image: 'images/products/eliza-350x350.jpg'
},
{
name: 'P90',
cat: 'RO Purifier 15 LPH',
price:18999.00,
slug: 'p90',
image: 'images/products/p90-1-350x350.jpg'
},
{
name: 'Purosis',
cat: 'RO Purifier 15 LPH',
price:19999.00,
slug: 'purosis',
image: 'images/products/purosis-350x350.jpg'
},
{
name: 'Chrome',
cat: 'RO Premium',
price:22999.00,
slug: 'chrome',
image: 'images/products/Chrome-350x350.png'
},
{
name: 'Finpure',
cat: 'RO Premium',
price:22999.00,
slug: 'finpure',
image: 'images/products/Finpure-350x350.png'
},
{
name: 'Innovica',
cat: 'RO Premium',
price:22999.00,
slug: 'innovica',
image: 'images/products/Innovica-350x350.png'
},
{
name: 'Wave Hot & Cold',
cat: 'RO Premium',
price:26999.00,
slug: 'wave-hot-cold',
image: 'images/products/Wave-Hot-Cold-350x350.png'
},
{
name: 'Under Cabin Basic',
cat: 'RO Under Sink',
price:16999.00,
slug: 'under-cabin-basic',
image: 'images/products/Under-Cabin-Basic-350x350.png'
},
{
name: 'Nile',
cat: 'RO Under Sink',
price:18999.00,
slug: 'nile',
image: 'images/products/nile-350x350.png'
},
{
name: 'Fighter under sink',
cat: 'RO Under Sink',
price:22999.00,
slug: 'fighter-under-sink',
image: 'images/products/fighter-under-sink-350x350.png'
},
{
name: 'P90',
cat: 'RO Under Sink',
price:24999.00,
slug: 'p90-ro-under-sink',
image: 'images/products/P90-350x350.png'
},



{
name: 'UF Filter',
cat: 'Basic UV UF Filters',
price: 2999,
slug: 'uf-filter',
image: 'images/products/uf-fliter-350x350.png'
},
{
name: 'UF Dolphin',
cat: 'Basic UV UF Filters',
price: 4999,
slug: 'uf-dolphin',
image: 'images/products/uf-dolphin-350x350.png'
},
{
name: 'Zero B UV',
cat: 'Basic UV UF Filters',
price: 6999,
slug: 'zero-b-uv',
image: 'images/products/ZERO-B-UV-350x350.png'
},
{
name: 'Online RO',
cat: 'Basic UV UF Filters',
price: 6999,
slug: 'online-ro',
image: 'images/products/Online-RO-350x350.png'
},
{
name: 'RO Dolphin',
cat: 'RO Filters 8 LPH',
price: 9999,
slug: 'ro-dolphin',
image: 'images/products/ro-dolphin.png'
},
{
name: 'Fighter',
cat: 'RO Filters 8 LPH',
price: 12999,
slug: 'fighter',
image: 'images/products/Fighter-350x350.png'
},

{
name: 'GD Basic',
cat: 'RO Filters 8 LPH',
price: 13999,
slug: 'gd-basic',
image: 'images/products/GD-Basic-350x350.png'
},
{
name: '25LPH RO with tank',
cat: 'Comercial RO',
price: 25950,
slug: '25lph-ro',
image: 'images/products/25LPH-RO-with-tank-350x350.png'
},
{
name: '50 LPH RO with tank',
cat: 'Comercial RO',
price: 39950,
slug: '50lph-ro',
image: 'images/products/50-LPH-RO-with-tank-350x350.png'
},
{
name: '100LPH Industrial RO with 1354 Iron Plant',
cat: 'Industrial RO',
price: 120000,
slug: '100lph-industrial',
image: 'images/products/100LPH-Industrial-RO-witH-350x350.png'
},
{
name: '250LPH Industrial RO with 1465 Iron Plant',
cat: 'Industrial RO',
price: 180000,
slug: '250lph-industrial',
image: 'images/products/250LPH-Industrial-RO-with-350x350.png'
},
{
name: '500LPH Industrial RO with 1665 Iron Plant 2 Nos',
cat: 'Industrial RO',
price: 298000,
slug: '500lph-industrial',
image: 'images/products/500LPH-Industrial-RO-with-350x350.png'
},
{
name: 'Top Vessal 1354 Iron Plant Imported Media one bag',
cat: 'Iron Removal & Softener Plants',
price: 24950,
slug: 'top-vessal-1354',
image: 'images/products/Top-Vessal-1354-Iron-Plant-pica-350x350.png'
},
{
name: 'Top & Bottom 1665 Iron Plant Imported Media two bag',
cat: 'Iron Removal & Softener Plants',
price: 62000,
slug: 'top-bottom-1665',
image: 'images/products/Top-Bottom-1665-Iron-Plant-350x350.png'
},
{
name: 'Heat Pumb 115 Ltr',
cat: 'Racold Solar Water Heater',
price: 124950,
slug: 'heat-pump-115',
image: 'images/products/Heat-Pumb-115-Ltr-350x350.png'
},
{
name: 'Alpha 100 LPD',
cat: 'Racold Solar Water Heater',
price: 26950,
slug: 'alpha-100',
image: 'images/products/Alpha-100-LPD--350x350.png'
},
{
name: 'OMEGA 100 LPD',
cat: 'Racold Solar Water Heater',
price: 56950,
slug: 'omega-100',
image: 'images/products/OMEGA-100-LPD-2-350x350.jpg'
},
{
name: 'Hot & Cold 15 Ltr',
cat: 'SS Dispensers',
price: 24950,
slug: 'ro-ss-15',
image: 'images/products/Hot-Cold-15-Ltr-350x350.jpg'
},
{
name: 'RO SS MODEL 15 LPH',
cat: 'SS Dispensers',
price: 24950,
slug: 'ro-ss-model-15-lph',
image: 'images/products/RO-SS-MODEL-350x350.jpg'
},
{
name: 'BR SERIES FILTERS',
cat: 'Swimming Pool',
slug: 'br-series-filters',
image: 'images/products/s4-350x350.png'
},
{
name: 'FAC SERIES',
cat: 'Swimming Pool',
slug: 'fac-series',
image: 'images/products/s5-350x350.png'
},
{
name: 'WH - 191 SERIES',
cat: 'Swimming Pool',
slug: 'wh-191-series',
image: 'images/products/s1-350x350.png'
}

];

const money = n => '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2 });
const fallback = "this.replaceWith(Object.assign(document.createElement('i'),{className:'bi bi-droplet-half ph-icon'}))";
function cardHTML(p, showCat) {
return `<article class="p-card">     <div class="p-img">       <img
        src="${p.image}"
        alt="${p.name}"
        loading="lazy"
        onerror="${fallback}"       >     </div>
    ${showCat ? `<span class="p-cat">${p.cat}</span>`: ''}     <h3 class="p-name"><a class="stretched-link" href="product/${encodeURIComponent(p.slug)}/">${p.name}</a></h3>
    ${p.price != null ?`<div class="p-price">${money(p.price)}</div>` : ''}

  </article>`;
}


