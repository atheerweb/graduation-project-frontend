// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Cards = (props) => {
    return (
        <Card sx={{ maxWidth: 345, height: "fit-content" }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {props.card.avatar}
                    </Avatar>
                }
                title={props.card.title}
                subheader={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography>
                            {props.card.freelancer}
                        </Typography>
                        <Typography>
                            {props.card.time}
                        </Typography>
                    </Box>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.card.body}
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <Typography color="primary" sx={{cursor: "pointer"}}>
                    ضف عرضك
                </Typography>
            </CardActions>
      </Card>
    )
}

export default Cards;