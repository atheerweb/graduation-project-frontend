import { Box, Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "@/styles/modules/freelancers/data.module.css";

const Cards = (props) => {
    return (
        <Card className={styles.projectsCards}>
            <CardHeader
                title={
                    <Box className={styles.projectsCardsHeader}>
                        <Typography>تصميم</Typography>
                        <Typography variant="h2">{props.content.title}</Typography>
                        <Typography sx={{opacity: 0.6}}>{props.content.date}</Typography>
                    </Box>   
                }
            />
            <CardMedia component="img" height="194" image="/images/freelancers_projects.png" alt="Project" />
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign="right">
                {props.content.body}
              </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards;