import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/modules/courses/hero.module.css";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
    const theme = useTheme();

    return (
        <Box className={styles.courses}>
            <Image src={"/images/courses_hero.png"} width={338} height={425} alt="Hero" />
            <Box className={styles.coursesTypographyContainer}>
                <Typography variant="h1">
                    طريقك للنجاح يبدأ من هنا
                </Typography>
                <Typography variant="h3" color={theme.palette.accent.primary}>
                    أفضل المعلمين من جميع أنحاء مصر و استمتع بأفضل العروص و الأسعار
                </Typography>
            </Box>
        </Box>
    )
}

export default Hero;