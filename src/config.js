module.exports = {
  email: 'frey77mehta@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/freyam',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/freyam.mehta',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fre7am',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/freyam-mehta',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    violet: '#7377fe',
    navy: '#0b0b19',
    darkNavy: '#0b0b19',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
