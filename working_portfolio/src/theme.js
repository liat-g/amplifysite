import { createTheme } from "@mui/material/styles"

// export const theme = createTheme ({
//     palette:{
//         primary:{
//             main: "#b8860b",
//             light:"#f8f8ff"
//         },
//         secondary:{
//             main:"#556b2f"
//         },
//         otherColor: {
//             main:"#a9a9a9"
//         }
//     }

// })

export const theme = createTheme({
    palette: {
        primary: {
            main: "#b8860b",
            light:"#f8f8ff"
          // light: will be calculated from palette.primary.main,
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary:{
            main:"#556b2f"
        },
        otherColor: {
            main:"#a9a9a9"
        }
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
        //   parargraphText:{

        //   },
          root: {
            // Some CSS
            fontSize: '1rem',
        secondary:{
            main:"#556b2f"
        },
        otherColor: {
            main:"#a9a9a9"
        }
    }
          },
        },
      },
    },);