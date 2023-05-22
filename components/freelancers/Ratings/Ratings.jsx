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

const Ratings = () => {
    return (
        <Card sx={{minHeight: "135px", minWidth: "300px"}}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                title={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1.25}}>
                        <Typography variant="h3">د. محمد خالد</Typography>
                        <Rating name="read-only" size="small" value={5} readOnly />
                    </Box>
                }
                subheader={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1}}>
                        <Stack direction="row" gap="5px">
                            <PersonIcon />
                            <Typography>
                                مدير شركة
                            </Typography>
                        </Stack>
                        <Typography>
                            2023-05-16
                        </Typography>
                    </Box>
                }
            />
            <CardContent sx={{px: 4}}>
                <Typography variant="body2" color="text.secondary">
                    شغل ممتاز جدا المشروع على اكمل وجهه سريع في التواصل والردود انصح جدا بالتعامل معه راقي وذو اخلاق
                </Typography>
            </CardContent>
      </Card>
    )
}

export default Ratings;