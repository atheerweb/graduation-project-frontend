// Components
import Data from "@/components/jobs/Data/Data";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useDispatch } from "react-redux";
// APIs
import client from "@/lib/client";
import { setOneJob } from "@/redux/slices/apiSlice";
// CSS Module
import styles from "@/styles/modules/jobs/proposal.module.css";

const JobProposal = ({ job }) => {
    const dispatch = useDispatch();
    dispatch(setOneJob({ value: job }));

    return (
        <Box className={styles.proposal}>
            <Typography variant="h2">
                {job && job.jop_title}
            </Typography>
            <Data />
        </Box>
    )
}

export const getServerSideProps = async (context) => {
    const response = await client.get(`/freelance/viewsets/job/${context.query.id}`);
    const data = await response.data;
  
    return {
      props: {
        job: data
      }
    }
  }

export default JobProposal;