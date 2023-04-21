import { Box, Typography, Stack } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "@/styles/modules/home/freelancers.module.css";

const Freelancers = () => {
    const media = useMediaQuery("(max-width: 1200px)");
    const freelancersCards = useSelector(state => state.constants.value.freelancersCards);
    
    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2" textAlign="center">أكثر المستقلين طلباً</Typography>
            <Stack className={styles.freelancersCardsStack} direction={media ? "column" : "row"} alignItems={media && "center"} spacing="72px">
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