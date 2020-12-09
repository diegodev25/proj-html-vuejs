// Istanza Vue per generare gli elementi nella navbar
var app = new Vue ({
  el: '#app',
  data: {
    logo: 'logo-2.png',
    menu: ['Home', 'About us', 'Feature', 'Testimonials', 'Contact US'],
    search: 'fas fa-search',
    cart: 'fas fa-shopping-cart'
  }
})
