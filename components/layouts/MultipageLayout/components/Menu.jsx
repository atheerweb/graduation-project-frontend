import { Box, Stack, Button, TextField, Divider, InputAdornment, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Menu = (props) => {
    const navLinks = useSelector(state => state.constants.value.navLinks);
    const theme = useTheme();
    const router = useRouter();
    const media = useMediaQuery("(max-width: 1100px)");

    return (
        <Box className={styles.menuNav} sx={{backgroundColor: theme.palette.accent.light, display: !media ? "none" : props.display}}>
            <TextField 
                className={styles.menuNavTextField}
                size="small"
                placeholder="ابحث عن مستقلين"
                InputProps={{ 
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                        "&::placeholder": {
                            color: theme.palette.accent.primary
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderRadius: "26px",
                            },
                        },
                    }}
            />
            <Divider sx={{backgroundColor: "primary.main"}} />
            <Stack direction="column-reverse" spacing="10px">
                {
                    navLinks.map((link, index) => (
                        <Link
                            className={styles.menuNavLinks}
                            sx={{
                                color: link.href === router.pathname ? theme.palette.accent.dark : theme.palette.accent.primary,
                                fontWeight: link.href === router.pathname && "bold"
                            }}
                            key={index}
                            href={link.href}
                        >
                            {link.title}
                        </Link>        
                    ))
                }
            </Stack>
            <Divider />
            <Stack spacing="20px" width="100%">
                <Button variant="contained" sx={{width: "100%", color: theme.palette.accent.light}}>دخول</Button>
                <Button variant="outlined" sx={{width: "100%", borderColor: theme.palette.accent.secondary}}>إنشاء حساب</Button>
            </Stack>
        </Box>
    )
}

export default Menu;