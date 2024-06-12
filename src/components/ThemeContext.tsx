// ThemeContext.tsx
import React, { createContext, useContext } from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';

// Definindo o tipo do tema
export type ThemeType = Theme;

// Crie um tema personalizado
const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: '"Victor Mono"',
            marginBottom: '3vh'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face:{
                    font-family: "Victor Mono", monospace;
                    font-optical-sizing: auto;
                    font-weight: 200;
                    font-style: normal;
                    }
                }
            `,
        }
    }
});

// Crie o contexto do tema
const ThemeContext = createContext<ThemeType>(theme);

// Hook personalizado para usar o tema
export const useThemeContext = () => useContext(ThemeContext);

// Componente provedor de tema
export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
