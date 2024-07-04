"use client"
import React, { createContext, useContext } from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';

export type ThemeType = Theme;

const theme = createTheme({
    typography: {
        allVariants: {
            color: "white",
        },
        body1: {
          fontSize: "25px",
        }
    },
    components: {
        MuiGrid: {
          styleOverrides: {
            container: {
              borderRadius: "4px",
              borderColor: "#00aba9"
            }
          }
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              '& .MuiInputBase-input, .css-120vuen-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                color: 'white',
              },
              '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
              },
              '& .MuiOutlinedInput-root': {
              '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                      borderColor: 'rgba(255,255,255,0.2)',
                  },
              },
              '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                  color: 'white'
              },
            },
          },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: "rgba(255,255,255,0.3)",
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "rgb(81, 81, 81, 1)",
            width: "100%",
          }
        }
      },
    }
});

const ThemeContext = createContext<ThemeType>(theme);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
