import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Tribute = () => {
    const theme = useTheme();

    return (
        <Box sx={{width: "100%", height: "300px", backgroundImage: "url('/images/coffee.png')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", display: "grid", placeItems: "center"}}>
            <Typography variant="h1" color={theme.palette.accent.light}>
                منصة عربية واعدة لتوصيل الشركات بأصحاب الأعمال
            </Typography>
        </Box>
    )
}

export default Tribute;