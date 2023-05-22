// Ratings
import Ratings from "../Ratings/Ratings";
// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
// Hooks
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
// CSS Modules
import styles from "@/styles/modules/freelancers/reviews.module.css";

const Reviews = () => {
    const { register, handleSubmit } = useForm();
    const theme = useTheme();
    const [rating, setRating] = useState(0);

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box className={styles.reviews}>
            <Box className={styles.contentContainer}>
                <Box className={styles.main}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <Rating
                            sx={{alignSelf: "center"}}
                            value={rating}
                            max={5}
                            dir="ltr"
                            name="unique-rating"
                            onChange={(event, newValue) => setRating(newValue)}
                        />
                        <OutlinedInput
                            sx={{height: "50px"}}
                            variant={"outlined"}
                            type={"text"}
                            placeholder={"قيم المستقل"}
                            {...register("notes", { required: "من فضلك عبر عن عن تجربتك مع المستقل" })}
                        />
                        <Button type="submit" sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.accent.light, fontWeight: "bold", "&:hover": {color: theme.palette.secondary.main}}}>
                            تقييم
                        </Button>
                    </form>
                    <Box className={styles.cardsContainer}>
                        <Ratings />
                        <Ratings />
                        <Ratings />
                    </Box>
                </Box>
                <Box className={styles.ratingBox}>
                    <Typography variant="h2" component="legend">4.7</Typography>
                    <Rating name="read-only" value={5} readOnly />
                </Box>
            </Box>
        </Box>
    )
}

export default Reviews;