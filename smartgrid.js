const smartgrid = require('smart-grid');

smartgrid('./src/assets', {
  filename: 'smartgrid',
  outputStyle: 'styl',
  columns: 24,
  offset: '8px',
  mobileFirst: true,
  container: {
    maxWidth: '1280px',
    fields: '20px',
  },
  breakPoints: {
    w1000: {
      width: '1000px',
      offset: '16px',
    },
  },
  mixinNames: {
    size: 'col-size',
  },
  tab: '  ',
});
