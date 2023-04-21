import { Card, CardHeader, Avatar, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar src="/images/testimonials_icon.png" />
                }
                titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
                subheaderTypographyProps={{color: theme.palette.accent.dark, opacity: 0.87}}
                title={props.title}
                subheader={props.body}
            />
            <CardContent>
                <Typography variant="body2" color={theme.palette.accent.dark} opacity={0.6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards;