// MUI Components
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";

const Filters = (props) => {
    const [rating, setRating] = useState(1);

    return (
        <Box className={styles.filtersContainer}>
            <OutlinedInput 
                variant={"outlined"}
                type={"text"}
                placeholder={"بحث"}
                onChange={(event) => {props.setFilters({ type: "title", payload: event.target.value })}}
            />
            <Box sx={{mt: "15px"}}>
                <Typography component="legend">التقييم</Typography>
                <Rating
                    value={rating}
                    max={5}
                    dir="ltr"
                    name="unique-rating"
                    onChange={(event, newValue) => {setRating(newValue); props.setFilters({type: "ratings", payload: newValue})}}
                />
            </Box>
        </Box>
    )
}

export default Filters;