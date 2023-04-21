import { Typography, Box, Stack, Button } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';

const Hero = () => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width: 500px)");
    const heroButtons = useSelector(state => state.constants.value.heroButtons);

    return (
        <Box sx={{minHeight: "650px", backgroundImage: "url('/images/freelancer.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", filter: "saturate(150%)", padding: "75px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
            <Typography variant="h1" color={theme.palette.accent.light} maxWidth={"642px"} textAlign={media ? "center" : "right"}>أبحث عن مستقلين مميزين في الوطن العربي</Typography>
            <Typography variant="h3" color="rgb(190, 190, 190)" maxWidth="603px" textAlign={media ? "center" : "right"} lineHeight="37px" paddingY="30px">منصة علمني للمستقلين هي فرع من منصة علمني تمتاز بالتركيز علي توصيل الكوادر بأصحاب الأعمال</Typography>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: media ? "center" : "flex-end", gap: "5px"}}>
                <Typography color="rgb(190, 190, 190)" lineHeight="37px">أكثر التخصصات طلباً</Typography>
                <Stack direction="row" spacing="11px" flexWrap="wrap" justifyContent={media ? "center" : "flex-end"} rowGap="11px">
                    {
                        heroButtons.map((button, index) => (
                            <Button 
                                key={index}
                                className="heroButtons"
                                startIcon={button === "شاهد المزيد" && <ArrowCircleLeftOutlinedIcon />}
                                sx={{
                                    backgroundColor: button === "شاهد المزيد" ? theme.palette.primary.main : "rgb(230, 230, 230)",
                                    color: button === "شاهد المزيد" ? theme.palette.accent.light : theme.palette.accent.dark,
                                    borderRadius: "16px",
                                    padding: "4px 12px",
                                    fontSize: "14px",
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