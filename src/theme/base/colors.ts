import { theme } from 'native-base';

export const colors = {
  primary: 
  {
    50: '#e3eeff',
    100: '#b6cdfe',
    200: '#88abf7',
    300: '#5b8af1',
    400: '#2d69ec',
    500: '#134fd2',
    600: '#0b3da4',
    700: '#052c77',
    800: '#001a4a',
    900: '#00091e',
  },
  secondary: theme.colors.amber,
  success: theme.colors.green,
  danger: theme.colors.red,
  error: theme.colors.red,
  warning: theme.colors.orange,

  // Set all grays to the same gray
  muted: theme.colors.coolGray,
  gray: theme.colors.coolGray,
  coolGray: theme.colors.coolGray,
  blueGray: theme.colors.coolGray,
  trueGray: theme.colors.coolGray,
  warmGray: theme.colors.coolGray,

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },
};
