// MUI Components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StyleIcon from '@mui/icons-material/Style';
// Hooks
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/about.module.css";

const About = () => {
    const { query: { username } } = useRouter();
    const freelancer = useApi(`/freelance/freelancer/${username}`);
    const chips = useSelector(state => state.constants.value.freelancersAboutChips);
    
    return (
        <Box className={styles.about}>
            <Box className={styles.containers}>
                <Typography variant="h3" sx={{mr: 2}}>
                    نبذة عني
                </Typography>
                <List>
                    <ListItem sx={{textAlign: "right"}}>
                        {freelancer.about}
                    </ListItem>
                </List>
            </Box>
            <Box className={styles.containers}>
                <Typography variant="h3" sx={{mr: 2}}>
                    كلمات مفتاحية
                </Typography>
                <Stack direction="row" flexWrap="wrap" rowGap="10px">
                    {
                        chips.map((chip, index) => (
                            <Chip 
                                sx={{mr: 2, px: 1.5}}
                                key={index}
                                label={chip}
                                color="secondary"
                                icon={<StyleIcon />}
                            />
                        ))
                    }
                </Stack>
            </Box>
        </Box>
    )
}

export default About;