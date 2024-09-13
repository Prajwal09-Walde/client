import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[300],
        },
        secondary: {
            main: purple[700],
            midNightViolet: "#000000"
        }
    }
});
