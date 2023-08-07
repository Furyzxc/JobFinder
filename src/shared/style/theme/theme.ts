import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#B6BABF",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: "#B6BABF",
          fontSize: "14px",
          paddingTop: "10px",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9AA0A7",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#42A5F5",
          fontSize: "16px",
        },
      },
    },
  },
});
