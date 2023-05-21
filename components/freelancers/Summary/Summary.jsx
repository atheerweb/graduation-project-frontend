// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Next Components
import Image from "next/image";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/summary.module.css";

const Summary = () => {
    const summaryStacks = useSelector(state => state.constants.value.summaryStacks);
    
    return (
        <Box className={styles.summary}>
            <Image height={123} width={123} src="/images/freelancers_summary_icon.png" alt="Freelancer" />
            <Typography variant="h2">الاسم الأول</Typography>
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