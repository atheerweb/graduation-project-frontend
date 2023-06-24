// Components
import Data from "@/components/jobs/Data/Data";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { setOneJob } from "@/redux/slices/apiSlice";
// Hooks
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useApi } from "@/lib/hooks";
// CSS Module
import styles from "@/styles/modules/jobs/proposal.module.css";

const JobProposal = () => {
    const { query: { id } } = useRouter();
    const job = useApi(`/freelance/viewsets/job/${id}`)
    const dispatch = useDispatch();
    job && dispatch(setOneJob({ value: job }));

    return (
        <Box className={styles.proposal}>
            <Typography variant="h2">
                {job && job.jop_title}
            </Typography>
            <Data />
        </Box>
    )
}

export default JobProposal;