import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "@/styles/modules/home/freelancers.module.css";

const Cards = (props) => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width: 1200px)");

    return (
        <Card sx={{width: media ? "250px" : "200px", borderRadius: "5px"}}>
            <CardActionArea>
                <CardMedia component="img" image="images/freelancers_images.png" alt="Freelancer" />
                <CardContent className={styles.freelancersCardsContent}>
                  <Typography className={styles.freelancersCardsHeader} gutterBottom variant="h6" color={theme.palette.accent.dark}>
                    {props.title}
                  </Typography>
                  <Typography variant="body2" color={theme.palette.accent.dark}>
                    {props.body}
                  </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards;