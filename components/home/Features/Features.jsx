import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const Features = () => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width: 800px)");
    const featuresIcons = useSelector(state => state.constants.value.featuresIcons);

    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h2" paddingTop="21px" textAlign="center">نفذ مشروعك كما تتصوره </Typography>
            <Stack direction={media ? "column" : "row"} sx={{width: "100%", justifyContent: "center", alignItems: "center", gap: media ? "50px" : "10%", paddingY: "50px"}}>
                {
                    featuresIcons(theme.palette.secondary.main).map((icon, index) => (
                        <Box key={index} sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
                            {icon.icon}
                            <Typography>{icon.title}</Typography>
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Features;