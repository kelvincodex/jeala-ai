import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppLayout} from "@/view/layout/AppLayout.tsx";
import {createTheme, CssBaseline} from "@mui/material";
import {red} from "@mui/material/colors";
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline >
              <AppLayout />
          </CssBaseline>
      </ThemeProvider>
  </React.StrictMode>,
)
