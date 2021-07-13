export const size = {
  tiny: '12px',
  base: '16px',
  small: '18px',
  medium: '20px',
  large: '28px',
  huge: '48px',
  navHeight: {
    mobile: '50px',
    tablet: '80px',
  },
};

export const color = {
  red: {
    dark: '#e03131',
    base: '#ff6b6b',
    light: '#ffc9c9',
  },
  gray: {
    dark: '#868e96',
    base: '#ced4da',
    light: '#e9ecef',
  },
  purple: {
    dark: '#5f3dc4',
    base: '#7048e8',
    light: '#9775fa',
  },

  green: '#12b886',

  country: {
    us: {
      primary: '#2e52b2',
      secondary: '#5c7cfa',
    },
    vietnam: {
      primary: '#d80027',
      secondary: '#fa5252',
    },
    indonesia: {
      primary: '#a2001d',
      secondary: '#e64980',
    },
  },
};

export const screen = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  tablet: `@media all and (min-width: ${screen.tablet})`,
  desktop: `@media all and (min-width: ${screen.desktop})`,
};
