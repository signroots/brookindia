(function () {
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  let cat = params.get('cat') || '', q = (params.get('q') || '').toLowerCase();

  function render() {
    let list = PRODUCTS.filter(p => (!cat || p.cat === cat) && (!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)));
    const sort = $('#sort').value;
    if (sort) list = [...list].sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);
    list = list.slice(0, +$('#show').value);
    $('#grid').innerHTML = list.map(p => cardHTML(p, false)).join('');
    $('#empty').classList.toggle('d-none', list.length > 0);
    $('#count').textContent = '(' + list.length + ')';
    document.querySelector('h1.page-title').firstChild.textContent = (cat || 'Products') + ' ';
    $('#crumbCat').textContent = cat || 'Products';
    document.title = (cat || 'Products') + ' | Brook India';
    $('#cats').innerHTML = CATS.map(c => `<a href="?cat=${encodeURIComponent(c)}" class="${c === cat ? 'on' : ''}">${c}</a>`).join('');
  }
  $('#cats').addEventListener('click', e => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    cat = cat === decodeURIComponent(a.search.slice(5)) ? '' : decodeURIComponent(a.search.slice(5));
    q = ''; history.replaceState(null, '', cat ? '?cat=' + encodeURIComponent(cat) : 'products.html');
    render();
  });
  $('#sort').onchange = $('#show').onchange = render;
  $('#views').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    document.querySelectorAll('#views button').forEach(x => x.classList.toggle('on', x === b));
    $('#grid').className = 'p-grid cols-' + b.dataset.c;
  });
  render();
})();
