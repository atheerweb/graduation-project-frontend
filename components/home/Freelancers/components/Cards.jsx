import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/modules/home/freelancers.module.css";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card>
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