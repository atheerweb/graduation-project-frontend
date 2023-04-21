import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card sx={{width: "200px", borderRadius: "5px"}}>
            <CardActionArea>
                <CardMedia component="img" image="images/freelancers_images.png" alt="Freelancer"/>
                <CardContent sx={{textAlign: "right", padding: "14px 16px"}}>
                  <Typography gutterBottom variant="h6" color={theme.palette.accent.dark} fontWeight="bold" marginBottom="2px">
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