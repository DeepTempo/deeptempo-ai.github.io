document.addEventListener('DOMContentLoaded', function() {
  // Create header HTML with dropdown menu
  const headerHTML = `
    <header class="navbar">
      <div class="navbar__logo">
        <img src="img/logo-full-color.png" alt="DeepTempo Logo">
      </div>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <nav class="navbar__nav" id="navbar-overlay">
        <ul class="navbar__list">
          <li class="navbar__item"><a href="index.html" class="navbar__link" id="nav-home">Home</a></li>
          <li class="navbar__item dropdown">
            <a href="product.html" class="navbar__link" id="nav-product">Product <i class="fas fa-chevron-down" style="font-size: 1.2rem; margin-left: 5px;"></i></a>
            <ul class="dropdown-menu">
              <li><a href="product.html" class="dropdown-item">Overview</a></li>
              <li><a href="LogLM_ML.html" class="dropdown-item" id="nav-loglm">vs ML/UEBA</a></li>
              <li><a href="snowflake.html" class="dropdown-item">Snowflake Native App</a></li>
              // <li><a href="openness.html" class="dropdown-item">Openness</a></li>
              <li><a href="whitepaper.html" class="dropdown-item" id="nav-whitepaper">Whitepaper</a></li>
            </ul>
          </li>
          <li class="navbar__item"><a href="news.html" class="navbar__link" id="nav-news">News</a></li>
          <li class="navbar__item"><a href="events.html" class="navbar__link" id="nav-events">Events</a></li>
          <li class="navbar__item"><a href="http://docs.deeptempo.ai/" target="_blank" class="navbar__link">Documentation</a></li>

          <li class="navbar__item"><a href="about-us.html" class="navbar__link" id="nav-about">About Us</a></li>

          <li class="navbar__item"><a href="contact-us.html" class="navbar__link" id="nav-contact">Contact Us</a></li>
        </ul>
        <div class="navbar__close" id="close-menu">&times;</div>
      </nav>
    </header>

    <style>
      /* Dropdown menu styles */
      .dropdown {
        position: relative;
      }
      
      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        min-width: 220px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        padding: 0.5rem 0;
        border-radius: 4px;
        list-style: none;
        margin-top: 0;
        border-top: 2px solid #ff2702;
      }
      
      .dropdown:hover .dropdown-menu {
        display: block;
      }
      
      .dropdown-item {
        color: #fff;
        text-decoration: none;
        padding: 1rem 1.5rem;
        display: block;
        font-size: 1.6rem;
        font-weight: 400;
        transition: color 0.3s, background-color 0.3s;
        letter-spacing: 0.5px;
      }
      
      .dropdown-item:hover {
        color: #ff2702;
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      /* Active state for dropdown items */
      .dropdown-item.active {
        color: #ff2702;
      }
      
      /* Mobile adjustments */
      @media screen and (max-width: 768px) {
        .dropdown-menu {
          position: static;
          background-color: transparent;
          box-shadow: none;
          display: block;
          padding-left: 2rem;
          min-width: auto;
          border-top: none;
          margin-top: 0.5rem;
        }
        
        .dropdown-item {
          padding: 0.8rem 1rem;
          font-size: 1.6rem;
          color: #fff;
        }
        
        .navbar__item.dropdown > .navbar__link {
          margin-bottom: 0.5rem;
        }
      }
    </style>
  `;
  

  // Insert header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
  // Set active class based on current page
  const currentPage = window.location.pathname.split('/').pop();
  
  // Map pages to their navigation IDs
  const pageToNavId = {
    'index.html': 'nav-home',
    'product.html': 'nav-product',
    'LogLM_ML.html': 'nav-loglm',
    'news.html': 'nav-news',
    'events.html': 'nav-events',
    'about-us.html': 'nav-about',
    'whitepaper.html': 'nav-whitepaper',
    'contact-us.html': 'nav-contact'
  };
  
  // Set active class
  if (pageToNavId[currentPage]) {
    document.getElementById(pageToNavId[currentPage]).classList.add('active');
    
    // If it's a dropdown item, also highlight the parent
    if (currentPage === 'LogLM_ML.html' || currentPage === 'product.html' || 
        currentPage === 'snowflake.html' || currentPage === 'openness.html') {
      document.getElementById('nav-product').classList.add('active');
    }
  }
  
  // Add event listeners for mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarNav = document.getElementById('navbar-overlay');
  const closeMenu = document.getElementById('close-menu');

  mobileMenu.addEventListener('click', () => {
    navbarNav.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    navbarNav.classList.remove('active');
  });
}); 
