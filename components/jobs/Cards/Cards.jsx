// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
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
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.5}}>
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
                <Link href={`/jobs/${props.card.id}`} sx={{textDecoration: "none"}}>
                    <Typography color="primary" sx={{cursor: "pointer", textDecoration: "none"}}>
                        ضف عرضك
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