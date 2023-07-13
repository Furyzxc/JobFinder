import {createTheme} from "@mui/material";

export const theme = createTheme({

    components: {
        MuiButton: {
            defaultProps: {
                size: 'small'
            }
        },


        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#9AA0A7",

                },


            }
        }
    }
})
