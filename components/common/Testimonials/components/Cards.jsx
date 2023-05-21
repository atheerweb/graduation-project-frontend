// MUI Components
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Hooks
import { useTheme } from "@mui/material/styles";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src="/images/testimonials_icon.png" alt="Avatar" sx={{ml: 1}} />
                }
                titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
                subheaderTypographyProps={{color: theme.palette.accent.dark, opacity: 0.87}}
                title={props.title}
                subheader={props.body}
            />
            <CardContent>
                <Typography variant="body2" sx={{color: theme.palette.accent.dark, opacity: 0.6}}>
                    أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ
                    أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards;