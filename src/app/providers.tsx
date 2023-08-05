'use client';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../utils/MUI_Theme';
import { CssBaseline } from '@mui/material';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    </>
  );
}
