// MUI Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// CSS Modules
import styles from "@/styles/modules/freelancers/data.module.css";

const Cards = (props) => {
    return (
        <Card className={styles.projectsCards}>
            <CardHeader
                title={
                    <Box className={styles.projectsCardsHeader}>
                        <Typography>
                            {props.content.project_name}
                        </Typography>
                        <Typography variant="h3">{props.content.title}</Typography>
                        <Typography sx={{opacity: 0.6}}>{Math.floor((Math.random() * 23) + 2000)}</Typography>
                    </Box>   
                }
            />
            <CardMedia component="img" height="194" image={props.content.image_urls || "/images/freelancers_projects.png"} alt="Project" />
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign="right">
                {props.content.project_descriotion}
              </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards;