import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "rgb(255, 153, 51)" },
        secondary: { main: "rgb(0, 153, 221)" },
        other: { 
            accent: "rgb(151, 151, 151)",
            white: "#fff",
            black: "#000"
        }
    }
});

export default theme;