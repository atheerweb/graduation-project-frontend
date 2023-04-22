import Image from "next/image";
import styles from "@/styles/modules/freelancers/summary.module.css";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Summary = () => {
    const summaryStacks = useSelector(state => state.constants.value.summaryStacks);
    return (
        <Box className={styles.summary}>
            <Image height={123} width={123} src="/images/freelancers_summary_icon.png" alt="Freelancer" />
            <Typography variant="h2">الاسم الأول</Typography>
            <Stack className={styles.summaryMainStack}>
                {
                    summaryStacks.map((stack, index) => (
                        <Stack key={index} className={styles.summarySecondaryStacks}>
                            <Typography>{stack.title}</Typography>
                            {stack.icon}
                        </Stack>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Summary;