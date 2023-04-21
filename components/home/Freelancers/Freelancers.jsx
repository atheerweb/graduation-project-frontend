import { Box, Typography, Stack } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';

const Freelancers = () => {
    const media = useMediaQuery("(max-width: 1200px)");
    const freelancersCards = useSelector(state => state.constants.value.freelancersCards);
    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "50px", padding: "84px 29px"}}>
            <Typography variant="h2" textAlign="center">أكثر المستقلين طلباً</Typography>
            <Stack direction={media ? "column" : "row"} justifyContent="center" alignItems={media && "center"} spacing="72px" width="100%">
                {
                    freelancersCards.map((freelancer, index) => (
                        <Cards key={index} title={freelancer.title} body={freelancer.body} />
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Freelancers;