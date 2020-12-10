// Istanza Vue per generare gli elementi nella navbar
var app = new Vue ({
  el: '#app',
  data: {
    logo: 'logo-2.png',
    menu: ['Home', 'About us', 'Feature', 'Testimonials', 'Contact US'],
    search: 'fas fa-search',
    cart: 'fas fa-shopping-cart',
    button: 'Get Started'
  }
});

// Istanza Vue per generare gli elementi nel FOOTER
var root = new Vue ({
  el: '#root',
  data: {
    logo: "img/35.png",
    paragraph: "It is a long established fact that a reader will be destracted by the readable.",
    copy: "Copyright",
    year: '2018',
    link: "Sofbox",
    menu: "Menu",
    aboutUS: "About Us",
    quick: 'Quick Links',
    itemMenu: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog'],
    itemAbout: ['About Sofbox', 'Road map', 'How it Work', 'Team', 'News'],
    itemQuick: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog']
  }
});
