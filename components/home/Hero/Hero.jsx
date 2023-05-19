// MUI Components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// Hooks
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from "@/styles/modules/home/hero.module.css";

const Hero = () => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width: 500px)");
    const heroButtons = useSelector(state => state.constants.value.heroButtons);

    return (
        <Box className={styles.hero}>
            <Typography variant="h1" sx={{maxWidth: "642px", color: theme.palette.accent.light, textAlign: media ? "center" : "right"}}>أبحث عن مستقلين مميزين في الوطن العربي</Typography>
            <Typography variant="h3" className={styles.headerThree} textAlign={media ? "center" : "right"}>منصة علمني للمستقلين هي فرع من منصة علمني تمتاز بالتركيز علي توصيل الكوادر بأصحاب الأعمال</Typography>
            <Box className={styles.categoriesContainer} alignItems={media ? "center" : "flex-end"}>
                <Typography className={styles.categoriesLabel}>أكثر التخصصات طلباً</Typography>
                <Stack className={styles.heroButtonsStack} direction="row" spacing="11px" justifyContent={media ? "center" : "flex-end"}>
                    {
                        heroButtons.map((button, index) => (
                            <Button 
                                key={index}
                                className={styles.heroButtons}
                                startIcon={button === "شاهد المزيد" && <ArrowCircleLeftOutlinedIcon />}
                                sx={{
                                    backgroundColor: button === "شاهد المزيد" ? theme.palette.primary.main : "rgb(230, 230, 230)",
                                    color: button === "شاهد المزيد" ? theme.palette.accent.light : theme.palette.accent.dark,
                                    "&:hover": {
                                        color: theme.palette.accent.light
                                    }
                                }}
                            >
                                {button}
                            </Button>
                        ))
                    }
                </Stack>
            </Box>
        </Box>
    )
}

export default Hero;