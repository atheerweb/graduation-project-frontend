import { Box, Typography, Stack, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Cards from "./Cards";
import { useSelector } from "react-redux";
import styles from "@/styles/modules/courses/tracks.module.css";

const Tracks = () => {
    const state = useSelector(state => state.constants.value);

    return (
        <Box className={styles.tracks}>
            <Typography variant="h2">مساراتنا</Typography>
            <Stack className={styles.tracksStack}>
                {
                    state.coursesTracks.map((track, index) => (
                        <Button key={index} className={styles.tracksButtons}>{track}</Button>
                    ))
                }
            </Stack>
            <Stack className={styles.tracksCardsStack}>
                <ArrowBackIos className={styles.tracksIcons} />
                    {
                        state.coursesTracksCards.map((card, index) => (
                            <Cards key={index} title={card.title} ratings={card.ratings} />
                        ))
                    }
                <ArrowForwardIos className={styles.tracksIcons} />
            </Stack>
        </Box>
    )
}

export default Tracks;