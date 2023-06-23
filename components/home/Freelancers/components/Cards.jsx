// MUI Components
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Hooks
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/home/freelancers.module.css";

const Cards = (props) => {
    const theme = useTheme();
    const router = useRouter();

    return (
        <Card onClick={() => router.push(`freelancers/${props.username}`)}>
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