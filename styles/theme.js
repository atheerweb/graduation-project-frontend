import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "rgb(255, 153, 51)" },
        secondary: { main: "rgb(0, 153, 221)" },
        accent: { 
            main: "rgb(151, 151, 151)",
            light: "#fff",
            dark: "#000"
        }
    }
});

export default theme;