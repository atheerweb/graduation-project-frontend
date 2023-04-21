import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/modules/home/tribute.module.css";

const Tribute = () => {
    const theme = useTheme();

    return (
        <Box className={styles.tribute}>
            <Typography variant="h1" sx={{color: theme.palette.accent.light, textAlign: "center"}}>
                منصة عربية واعدة لتوصيل الشركات بأصحاب الأعمال
            </Typography>
        </Box>
    )
}

export default Tribute;