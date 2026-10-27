
document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('homeProductViewport');
  const track = document.getElementById('homeProductTrack');
  const prev = document.getElementById('homeProductPrev');
  const next = document.getElementById('homeProductNext');

  // Run only on pages containing the homepage carousel
  if (!viewport || !track || !prev || !next) return;

  // Check that the product data and card renderer exist
  if (typeof PRODUCTS === 'undefined' ||
      typeof cardHTML !== 'function') {
    console.error('Homepage carousel: PRODUCTS or cardHTML is missing.');
    return;
  }

  // Render the existing product data
  track.innerHTML = PRODUCTS
    .map(product => cardHTML(product, true))
    .join('');

  // Scroll one group of products at a time
  const scrollAmount = () => viewport.clientWidth * 0.8;

  next.addEventListener('click', () => {
    viewport.scrollBy({
      left: scrollAmount(),
      behavior: 'smooth'
    });
  });

  prev.addEventListener('click', () => {
    viewport.scrollBy({
      left: -scrollAmount(),
      behavior: 'smooth'
    });
  });
});