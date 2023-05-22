// Components
import Data from "@/components/jobs/Data/Data";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// CSS Module
import styles from "@/styles/modules/jobs/proposal.module.css";

const JobProposal = () => {
    return (
        <Box className={styles.proposal}>
            <Typography variant="h2">
                تفاصيل الوظيفة
            </Typography>
            <Data />
        </Box>
    )
}

export default JobProposal;