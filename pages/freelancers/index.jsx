// Components
import Filters from "@/components/freelancers/Filters/Filters";
import Main from "@/components/freelancers/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useReducer } from "react";
import { useDispatch } from "react-redux";
// API
import { setAllFreelancers } from "@/redux/slices/apiSlice";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";
import { useApi } from "@/lib/hooks";

const reducer = (state, action) => {
    switch (action.type) {
        case "title": return { title: action.payload, ratings: state.ratings };
        default: return { title: state.title, ratings: action.payload };
    }
}

const Freelancers = () => {
    const [ filters, setFilters ] = useReducer(reducer, {title: "", ratings: 5});
    const freelancers = useApi("/freelance/all-freelancers/");
    const dispatch = useDispatch();
    freelancers && dispatch(setAllFreelancers({ value: freelancers.map((freelancer, index) => {return { ...freelancer, ratings: Math.floor((Math.random() * 5) + 1) }}) }));

    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2">
                المستقلين المتاحيين
            </Typography>
            <Box className={styles.contentContainer}>
                <Filters setFilters={setFilters} />
                <Main filters={filters} />
            </Box>
        </Box>
    )
}

export default Freelancers;