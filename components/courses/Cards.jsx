import { Card, CardHeader, CardMedia, CardActions, IconButton, Stack, Rating, Button, Typography, Link } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import styles from "@/styles/modules/courses/tracks.module.css";
import { useTheme } from "@mui/material/styles";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card className={styles.tracksCards}>
            <CardHeader
                title={props.title}
                subheader={
                    <Stack className={styles.tracksCardsSubheaderStack}>
                        <Rating readOnly value={props.ratings} />
                        <Typography>{props.subTitle}</Typography>
                    </Stack>
                }
            />
            <CardMedia component="img" height="194" image="/images/courses_tracks_cards.png" alt="Track" />
            <CardActions disableSpacing>
                <Stack className={styles.tracksCardsActionsStack}>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <Link href="" sx={{color: theme.palette.secondary.main, textDecoration: "none"}}>شاهد</Link>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default Cards;