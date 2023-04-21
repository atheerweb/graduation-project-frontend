import { Box, Typography, Stack } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";

const Freelancers = () => {
    const freelancersCards = useSelector(state => state.constants.value.freelancersCards);
    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "28px", padding: "84px 29px"}}>
            <Typography variant="h2">أكثر المستقلين طلباً</Typography>
            <Stack direction="row" justifyContent="center" spacing="72px" width="100%">
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