// Components
import Menu from "./Menu";
// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
// Next Components
import Image from "next/image";
// Hooks
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Header = () => {
    const navLinks = useSelector(state => state.constants.value.navLinks);
    const theme = useTheme();
    const router = useRouter();
    const media = useMediaQuery("(max-width: 1100px)");

    const [display, setDisplay] = useState("none");

    const handleMenuClick = () => {
        setDisplay(previous => previous === "none" ? "flex" : "none");
    }

    return (
        <Box className={styles.mainNav} sx={{backgroundColor: theme.palette.accent.light, boxShadow: `0 0 5px ${theme.palette.accent.primary}`}}>
            <Menu display={display} />
            <Image width={62} height={41} src="/images/header_logo.png" alt="علمنى" priority />
            <Stack direction="row" gap="65px" display={media && "none"}>
                {
                    navLinks.map((link, index) => (
                        <Link
                            className={styles.navLinks}
                            sx={{
                                color: link.href === router.pathname ? theme.palette.accent.dark : theme.palette.accent.primary,
                                fontWeight: link.href === router.pathname && "bold",
                                textDecoration: "none"
                            }}
                            key={index}
                            href={link.href}
                        >
                            {link.title}
                        </Link>        
                    ))
                }
            </Stack>
            <OutlinedInput
                className={styles.mainNavSearch}
                variant="outlined"
                placeholder="ابحث عن مستقلين"
                dir="ltr"
                inputProps={{style: { textAlign: "end", borderRadius: "25px" }}}
                sx={{display: media && "none", borderRadius: "25px"}}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="start"
                        >
                            <SearchIcon color="primary" />
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Stack direction="row" gap="20px" display={media && "none"}>
                <Link href="/signup">
                    <Button variant="outlined" color="secondary">إنشاء حساب</Button>
                </Link>
                <Link href="/signin">
                    <Button variant="contained" color="secondary">تسجيل دخول</Button>
                </Link>
            </Stack>
            <MenuIcon sx={{color: theme.palette.primary.main, cursor: "pointer", display: !media && "none"}} onClick={handleMenuClick} />
        </Box>
    )
}

export default Header;