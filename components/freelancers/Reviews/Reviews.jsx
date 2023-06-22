// Ratings
import Ratings from "../Ratings/Ratings";
// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { addFreelancerRatings } from "@/redux/slices/constantsSlice";
// Hooks
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/reviews.module.css";

const Reviews = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const ratings = useSelector(state => state.constants.value.freelancerRatings);
    const router = useRouter();
    const theme = useTheme();
    const [rating, setRating] = useState(5);

    const onSubmit = (values) => {
        const user = JSON.parse(localStorage.getItem("user")).user;

        JSON.parse(localStorage.getItem("user")).token ?
        dispatch(addFreelancerRatings({
            value: {
                id: user.id,
                avatar: user.first_name[0],
                title: `${user.first_name} ${user.last_name}`,
                ratings: rating,
                job: "عميل",
                time: new Date().toLocaleDateString(),
                description: values.notes
            }
        })) :
        router.push("/signin")
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
                        {
                            ratings.map(rating => (
                                <Ratings content={rating} />
                            ))
                        }
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