import Menu from "./Menu";
import { Box, Stack, Button, TextField, InputAdornment, Link } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

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
        <Box sx={{backgroundColor: "white", boxShadow: `0 0 5px ${theme.palette.accent.primary}`, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "21px 16px", position: "sticky", top: 0, zIndex: 999}}>
            <MenuIcon sx={{color: theme.palette.primary.main, display: !media && "none"}} onClick={handleMenuClick} />
            <Stack direction="row" spacing="20px" display={media && "none"}>
                <Button variant="contained" sx={{color: theme.palette.accent.light}}>دخول</Button>
                <Button variant="outlined" sx={{borderColor: theme.palette.accent.secondary}}>إنشاء حساب</Button>
            </Stack>
            <TextField 
                size="small"
                placeholder="ابحث عن مستقلين"
                className="searchbar"
                InputProps={{ 
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                        display: media && "none",
                        width: "409px",
                        "&::placeholder": {
                            color: theme.palette.accent.primary,
                            textAlign: "right"
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderRadius: "26px",
                            },
                        },
                    }}
            />
            <Stack direction="row" spacing="65px" display={media && "none"}>
                {
                    navLinks.map((link, index) => (
                        <Link
                            className="navLinks"
                            sx={{
                                textDecoration: "none",
                                color: link.href === router.pathname ? theme.palette.accent.dark : theme.palette.accent.primary,
                                cursor: "pointer",
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
            <Image width={62} height={41} src="/images/header_logo.png" alt="علمنى" priority />
            <Menu display={display} />
        </Box>
    )
}

export default Header;