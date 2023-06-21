// Components
import Data from "@/components/jobs/Data/Data";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";
// CSS Module
import styles from "@/styles/modules/jobs/proposal.module.css";

const JobProposal = () => {
    const { query: { id } } = useRouter();
    const job = useApi(`/freelance/viewsets/job/${id}`);

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