import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "rgb(255, 153, 51)" },
        secondary: { main: "rgb(0, 153, 221)" },
        accent: { 
            primary: "rgb(151, 151, 151)",
            secondary: "rgb(217 217 217)",
            light: "#fff",
            dark: "#000"
        }
    },
    typography: {
        fontFamily: "'Tajawal', sans-serif",
        h1: {
            fontSize: 48
        },
        h2: {
            fontSize: 34
        },
        h3: {
            fontSize: 24
        }
    }
});

export default theme;