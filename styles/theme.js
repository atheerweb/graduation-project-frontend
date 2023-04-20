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
        fontFamily: "'Tajawal', sans-serif"
    }
});

export default theme;