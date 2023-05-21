// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
// Hooks
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Menu = (props) => {
    const navLinks = useSelector(state => state.constants.value.navLinks);
    const theme = useTheme();
    const router = useRouter();
    const media = useMediaQuery("(max-width: 1100px)");

    return (
        <Box className={styles.menuNav} sx={{backgroundColor: theme.palette.accent.light, display: !media ? "none" : props.display}}>
            <OutlinedInput
                className={styles.menuNavTextField}
                variant="outlined"
                placeholder="ابحث عن مستقلين"
                dir="ltr"
                inputProps={{style: { textAlign: "end" }}}
                sx={{display: !media && "none"}}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleShowPasswordClick(0)}
                          edge="start"
                        >
                            <SearchIcon color="primary" />
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Divider />
            <Stack direction="column" spacing="10px">
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
                <Link href="/signup">
                    <Button variant="outlined" color="secondary" sx={{width: "100%", borderColor: theme.palette.accent.secondary}}>
                        إنشاء حساب
                    </Button>
                </Link>
                <Link href="/signin">
                    <Button variant="contained" color="secondary" sx={{width: "100%", borderColor: theme.palette.accent.secondary}}>
                        تسجيل دخول
                    </Button>
                </Link>
            </Stack>
        </Box>
    )
}

export default Menu;