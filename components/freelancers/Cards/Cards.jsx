// Next Components
import Link from "next/link";
// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Cards = (props) => {
    return (
        <Card sx={{ maxWidth: 345, height: "fit-content" }}>
            <CardHeader
                sx={{px: 0}}
                avatar={
                    <Avatar aria-label="recipe">
                        {props.card.avatar}
                    </Avatar>
                }
                title={
                    <Typography sx={{mr: 1.5}}>
                        {props.card.title}
                    </Typography>
                }
                subheader={
                    <Box sx={{display: "flex", alignItems: "center", gap: "10px", px: 1.5}}>
                        <Typography component="legend">التقييمات</Typography>
                        <Rating size="small" name="read-only" value={props.card.ratings} readOnly />
                    </Box>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.card.body}
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Link href={{pathname: `/freelancers/${props.card.id}`}}>
                    <Typography color="primary" sx={{cursor: "pointer"}}>
                        وظفنى
                    </Typography>
                </Link>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
            </CardActions>
      </Card>
    )
}

export default Cards;