"use client"

import { createTheme } from "@mui/material";

export const theme = createTheme({
  
  palette: {
    primary: {
      main: "#18333E",
      
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  components: {

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        
      },
    },

    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8, 
        },
      },
    },
    MuiPopover: {},
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: "1px solid #73A36B",
          borderRadius: "5px",
          textTransform: "inherit",
          fontSize: 16,
          transition: "all 0.3s ease-in-out 0s",
          "&:hover": {
            border: "1px solid #FF7F5C",
            color: "#FF7F5C",
            background: "inherit",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
          },
          "&:active": {
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
            transform: "translateY(1px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid #229283",
          borderRadius: "2px",
          textTransform: "uppercase",
          color: "#229283",
          transition: "all 0.3s ease-out 0s",
          "&:hover": {
            border: "1px solid #229283",
            color: "#fff",
            background: "#229283",
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            transform: "translateY(1px)",
          },
        },
        contained: {
          border: "1px solid #229283",
          background: "#229283",
          borderRadius: "2px",
          textTransform: "uppercase",
          boxShadow: "none",
          color: "#fff",
          transition: "all 0.3s ease-out 0s",
          "&:hover": {
            border: "1px solid #229283",
            background: "inherit",
            boxShadow: 'none',
            borderRadius: "2px",
            color: "#229283",
          },
        },
       
      },
    },
    
  },
});
