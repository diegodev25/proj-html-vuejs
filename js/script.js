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
    logo: 'img/35.png',
    paragraph1: 'It is a long established fact that a',
    paragraph2: 'reader will be distracted by the',
    paragraph3: 'readable content.',
    copy: 'Copyright',
    year: '2018',
    link: "Sofbox",
    items: [
      {
        name: 'Menu',
        tags: [
          {
            urlname: 'About Us',
            url: '#'
          },
          {
            urlname: 'Theme',
            url: '#'
          },
          {
            urlname: 'Features',
            url: '#'
          },
          {
            urlname: 'Pricing',
            url: '#'
          },
          {
            urlname: 'Blog',
            url: '#'
          },
        ]
      },
      {
        name: 'About Us',
        tags: [
          {
            urlname: 'About Sofbox',
            url: '#'
          },
          {
            urlname: 'Road map',
            url: '#'
          },
          {
            urlname: 'How it Work',
            url: '#'
          },
          {
            urlname: 'Team',
            url: '#'
          },
          {
            urlname: 'News',
            url: '#'
          },
        ]
      },
      {
        name: 'Quick Links',
        tags: [
          {
            urlname: 'About Us',
            url: '#'
          },
          {
            urlname: 'Theme',
            url: '#'
          },
          {
            urlname: 'Features',
            url: '#'
          },
          {
            urlname: 'Pricing',
            url: '#'
          },
          {
            urlname: 'Blog',
            url: '#'
          },
        ]
      }
    ]
  }
})
