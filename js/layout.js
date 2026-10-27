
/* Shared header, footer and floating buttons, injected on every page */
(function () {
  const page = document.body.dataset.page;

  const nav = [
    ['index.html', 'home', 'Home'],
    ['about.html', 'about', 'About us'],
    ['products.html', 'products', 'Products'],
    ['services.html', 'services', 'Services'],
    ['contact.html', 'contact', 'Contact us']
  ];

  /* Shared Header */
  const header = `
    <header class="site-header">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo/brook-logo-01.svg" alt="Brook Water Purifiers">
          </a>

          <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="bi bi-list"></i>
          </button>

          <div class="collapse navbar-collapse justify-content-center" id="menu">
            <ul class="navbar-nav">
              ${nav.map(n => `
                <li class="nav-item">
                  <a class="nav-link ${n[1] === page ? 'active' : ''}"
                     href="${n[0]}">${n[2]}</a>
                </li>
              `).join('')}
            </ul>
          </div>

          <button class="search-btn" id="searchBtn" type="button" aria-label="Search">
            <i class="bi bi-search"></i>
          </button>
        </nav>
      </div>

      <div class="search-bar" id="searchBar">
        <div class="container">
          <form id="searchForm" class="d-flex gap-2">
            <input
              type="search"
              class="form-control"
              id="q"
              placeholder="Search products"
              aria-label="Search products">
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </header>
  `;

  /* Shared Footer */
  const footer = `
    <footer class="site-footer">
      <div class="container">

        <div class="strip">
          <div>Pure Water, Pure Life</div>
          <div>Trusted Technology</div>
          <div><i class="bi bi-truck me-2"></i>Dedicated Support</div>
        </div>

        <div class="f-cols">

          <!-- Company Details -->
          <div>
            <img class="logo"
              src="images/logo/brook-logo-02.svg"
              alt="Brook India">

            <p>
              Brook Total Water Management<br>
              Solutions, RO Kokkur<br>
              Malappuram Dt, Kerala State
            </p>

            <div class="social mt-4">
              <a href="https://www.facebook.com/BrookWaterFilters/"
                 aria-label="Facebook"
                 target="_blank"
                 rel="noopener noreferrer">
                <i class="bi bi-facebook"></i>
              </a>

              <a href="https://www.instagram.com/brookindia/"
                 aria-label="Instagram"
                 target="_blank"
                 rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
              </a>

              <a href="https://www.youtube.com/channel/UCowHFdKoKGCxndaowOwyT9g/videos"
                 aria-label="YouTube"
                 target="_blank"
                 rel="noopener noreferrer">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <!-- Customer Care -->
          <div class="col-mid">
            <h5>Need help</h5>
            <p class="cc">CUSTOMER CARE</p>
            <p class="cc-num">9746 100 300</p>

            <p>
              Trivandrum | Calicut | Kochi<br>
              Thrissur | Palakkad | Malappuram
            </p>

            <div class="f-mail">
              <a href="mailto:info@brookindia.com">
                <i class="bi bi-envelope me-3"></i>
                info@brookindia.com
              </a>
            </div>
          </div>

          <!-- Information Links -->
          <div>
            <h5>Information</h5>

            <ul class="mt-3">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <!-- Google Map -->
          <div>
            <iframe
              class="f-map"
              title="Brook India location map"
              loading="lazy"
              src="https://maps.google.com/maps?q=Brook%20India%20Water%20Management%20Solutions&t=m&z=12&output=embed">
            </iframe>
          </div>

        </div>
      </div>
    </footer>

    <!-- Copyright with Automatically Updated Year -->
    <div class="container copy">
      Copyright &copy; <span id="copyrightYear"></span> Brook India |
      All Rights Reserved —
      Powered By
      <a href="https://axisdigitalpro.com"
         target="_blank"
         rel="noopener noreferrer">Axis Digital</a>
    </div>

    <!-- Floating Contact Buttons -->
    <div class="side-fab" id="fab">
      <button class="arrow" id="fabBtn"
        type="button"
        aria-label="Toggle quick contact"
        aria-expanded="false">
        <i class="bi bi-arrow-right"></i>
      </button>

      <a class="wa"
         href="https://wa.me/919746100300"
         aria-label="WhatsApp">
        <i class="bi bi-whatsapp"></i>
      </a>

      <a class="ph"
         href="tel:9746100300"
         aria-label="Call Brook India">
        <i class="bi bi-telephone-fill"></i>
      </a>
    </div>

    <!-- Back to Top -->
    <button id="toTop" type="button" aria-label="Back to top">
      <i class="bi bi-chevron-double-up"></i>
    </button>
  `;

  /* Inject Header and Footer */
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* Helper */
  const $ = selector => document.querySelector(selector);

  /* Search Bar Toggle */
  const searchBtn = $('#searchBtn');
  const searchBar = $('#searchBar');
  const searchInput = $('#q');

  if (searchBtn && searchBar && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchBar.classList.toggle('open');

      if (searchBar.classList.contains('open')) {
        searchInput.focus();
      }
    });
  }

  /* Product Search */
  const searchForm = $('#searchForm');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', event => {
      event.preventDefault();

      const query = searchInput.value.trim();

      if (query) {
        window.location.href =
          'products.html?q=' + encodeURIComponent(query);
      }
    });
  }

  /* Floating Contact Buttons */
  const fab = $('#fab');
  const fabBtn = $('#fabBtn');

  if (fab && fabBtn) {
    fabBtn.addEventListener('click', () => {
      const isClosed = fab.classList.toggle('closed');
      fabBtn.setAttribute('aria-expanded', String(!isClosed));
    });
  }

  /* Back to Top */
  const toTop = $('#toTop');

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    const updateToTop = () => {
      toTop.classList.toggle('show', window.scrollY > 400);
    };

    window.addEventListener('scroll', updateToTop, { passive: true });
    updateToTop();
  }

  /* Automatically Update Copyright Year */
  const copyrightYear = $('#copyrightYear');

  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  /* Hero Carousel Image Animation */
  const heroCar = document.getElementById('heroCar');
  const heroImg = document.querySelector('.hero-const');

  if (heroCar && heroImg) {
    function replayHeroImg() {
      heroImg.classList.remove('animate');

      // Restart the CSS animation
      void heroImg.offsetWidth;

      heroImg.classList.add('animate');
    }

    heroCar.addEventListener('slide.bs.carousel', replayHeroImg);
    replayHeroImg();
  }

})();




  const imagePopup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');
  const popupClose = document.getElementById('popupClose');

  // Open popup when an award or certificate is clicked
  document.querySelectorAll('.doc-grid img').forEach(img => {
    img.addEventListener('click', () => {
      popupImage.src = img.src;
      popupImage.alt = img.alt;
      imagePopup.classList.add('active');
      imagePopup.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close popup
  function closeImagePopup() {
    imagePopup.classList.remove('active');
    imagePopup.setAttribute('aria-hidden', 'true');
    popupImage.src = '';
    document.body.style.overflow = '';
  }

  popupClose.addEventListener('click', closeImagePopup);

  // Close when clicking the dark background
  imagePopup.addEventListener('click', event => {
    if (event.target === imagePopup) {
      closeImagePopup();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && imagePopup.classList.contains('active')) {
      closeImagePopup();
    }
  });

