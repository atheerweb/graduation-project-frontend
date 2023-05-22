// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import PersonIcon from '@mui/icons-material/Person';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Proposers = (props) => {
    return (
        <Card sx={{ minHeight: "fit-content" }}>
            <CardHeader
                sx={{px: 0}}
                avatar={
                    <Avatar aria-label="recipe">
                        {props.content.avatar}
                    </Avatar>
                }
                title={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.5}}>
                        <Typography variant="h3" sx={{mr: 0.5}}>
                            {props.content.title}
                        </Typography>
                        <Typography variant="h3">
                            {props.content.price} $
                        </Typography>
                    </Box>
                }
                subheader={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.5}}>
                        <Box>
                            <Rating sx={{mr: 0.5}} size="small" name="read-only" value={props.content.ratings} readOnly />
                            <Stack direction="row" gap="5px">
                                <PersonIcon />
                                <Typography>
                                    {props.content.job}
                                </Typography>
                            </Stack>
                        </Box>
                        <Typography>
                            {props.content.time}
                        </Typography>
                    </Box>
                }
            />
            <CardContent sx={{px: 2}}>
                <Typography variant="body2" color="text.secondary">
                    {props.content.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Proposers;