import Link from "next/link";
// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Cards = (props) => {
  return (
    <Card sx={{ maxWidth: 345, height: "fit-content" }}>
      <CardHeader
        sx={{ px: 0 }}
        avatar={
          <Avatar aria-label="recipe" src={props.card.img_url}>
            {props.card.user_full_name[0]}
          </Avatar>
        }
        title={<Typography sx={{ mr: 1.5 }}>{props.card.jop_title}</Typography>}
        subheader={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1.5,
            }}
          >
            <Typography>{props.card.user_full_name[0]}</Typography>
            <Typography>
              {`منذ ${Math.abs(
                new Date().getMinutes() -
                  new Date(props.card.entry_date).getMinutes()
              )} يوم`}
            </Typography>
          </Box>
        }
      />
      <CardMedia
        sx={{ height:200 }}
        component="img"
        image={props.image_url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBnjlgwP0Bb-lsbs-vnXnk7WbwWWQdmuAaSfHVWMJ&s'}
        title={props.jop_title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.card.descriotion}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href={`/jobs/${props.card.job_id}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            color="primary"
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            ضف عرضك
          </Typography>
        </Link>
        <IconButton disabled aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
