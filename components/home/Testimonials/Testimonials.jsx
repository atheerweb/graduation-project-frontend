import { Box, Typography, Stack } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";

const Testimonials = () => {
    const testimonialsCards = useSelector(state => state.constants.value.testimonialsCards);

    return (
        <Box sx={{width: "100%", paddingY: "84px", display: "flex", flexDirection: "column", alignItems: "center", gap: "79px"}}>
            <Typography variant="h2">ماذا يقول عنا أصحاب الأعمال</Typography>
            <Stack direction="row" spacing="60px">
                {
                    testimonialsCards.map((card, index) => (
                        <Cards key={index} title={card.title} body={card.body} />
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Testimonials;