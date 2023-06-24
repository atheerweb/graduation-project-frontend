// MUI Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/summary.module.css";
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";

const Summary = () => {
    const { query: { username } } = useRouter();
    const freelancers = useApi("/freelance/all-freelancers/");
    const freelancerImage = freelancers && freelancers.filter(freelancer => freelancer.username === username)[0];
    const freelancer = useSelector(state => state.api.value.oneFreelancer);
    const summaryStacks = useSelector(state => state.constants.value.summaryStacks);
    
    return (
        <Box className={styles.summary}>
            <Avatar sx={{height: 123, width: 123}} src={freelancerImage && freelancerImage.image_url || "/images/freelancers_summary_icon.png"} alt="Freelancer" />
            <Typography variant="h2">
                {freelancer.name}
            </Typography>
            <Stack direction="row" className={styles.summaryMainStack}>
                {
                    summaryStacks.map((stack, index) => (
                        <Stack key={index} direction="row" className={styles.summarySecondaryStacks}>
                            {stack.icon}
                            <Typography>{stack.title}</Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Summary;