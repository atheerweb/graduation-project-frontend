import { Box, Typography, Stack, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "@/styles/modules/courses/tracks.module.css";

const Tracks = () => {
    const state = useSelector(state => state.constants.value);
    const theme = useTheme();
    const mediumMedia = useMediaQuery("(max-width: 1000px)");
    const smallMedia = useMediaQuery("(max-width: 750px)");
    const [cardsLength, setCardsLength] = useState(3);
    const [activeTrack, setActiveTrack] = useState("statistics");

    useEffect(() => {
        if (smallMedia) setCardsLength(1);
        else if (mediumMedia) setCardsLength(2);
        else setCardsLength(3);
    }, [mediumMedia, smallMedia]);

    const handleTrackClick = (newTrack) => {
        setActiveTrack(newTrack);
    }

    return (
        <Box className={styles.tracks}>
            <Typography variant="h2">مساراتنا</Typography>
            <Stack className={styles.tracksStack}>
                {
                    state.coursesTracks.map((track, index) => (
                        <Button key={index}
                                className={styles.tracksButtons} 
                                sx={{
                                    backgroundColor: activeTrack === track[0] ? theme.palette.primary.main : "rgb(217 217 217)",
                                    color: activeTrack === track[0] ? "white" : "black"
                                }}
                                onClick={() => handleTrackClick(track[0])}
                        >
                            {track[1]}
                        </Button>
                    ))
                }
            </Stack>
            <Stack className={styles.tracksCardsStack}>
                <ArrowBackIos className={styles.tracksIcons} />
                    {
                        state.coursesTracksCards[activeTrack].slice(0, cardsLength).map((card, index) => (
                            <Cards key={index} title={card.title} subTitle={card.subTitle} ratings={card.ratings} />
                        ))
                    }
                <ArrowForwardIos className={styles.tracksIcons} />
            </Stack>
        </Box>
    )
}

export default Tracks;