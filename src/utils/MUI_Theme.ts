import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    h1: {
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    caption: {
      color: '#999999',
    },
  },
});
