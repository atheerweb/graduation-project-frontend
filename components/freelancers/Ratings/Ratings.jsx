// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Ratings = ({ content }) => {
    return (
        <Card sx={{minHeight: "135px", minWidth: "300px"}}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {content.avatar}
                    </Avatar>
                }
                title={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1.25}}>
                        <Typography variant="h3">
                            {content.title}
                        </Typography>
                        <Rating name="read-only" size="small" value={content.ratings} readOnly />
                    </Box>
                }
                subheader={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1}}>
                        <Stack direction="row" gap="5px">
                            <PersonIcon />
                            <Typography>
                                {content.job}
                            </Typography>
                        </Stack>
                        <Typography>
                            {content.time}
                        </Typography>
                    </Box>
                }
            />
            <CardContent sx={{px: 4}}>
                <Typography variant="body2" color="text.secondary">
                    {content.description}
                </Typography>
            </CardContent>
      </Card>
    )
}

export default Ratings;