// Components
import Menu from './Menu';
// MUI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuList from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
// Next Components
import Image from 'next/image';
// Hooks
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';
import Dropper from './Dropper';
import { useApi } from '@/lib/hooks';

const Header = () => {
  const navLinks = useSelector((state) => state.constants.value.navLinks);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const router = useRouter();
  const media = useMediaQuery('(max-width: 1250px)');
  const freelancers = useApi("/freelance/all-freelancers/");

  useEffect(() => {
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem('user'))
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, [ typeof window ]);

  const [display, setDisplay] = useState('none');

  const handleMenuClick = () => {
    setDisplay((previous) => (previous === 'none' ? 'flex' : 'none'));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closingHandle = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    freelancers.forEach(freelancer => {
      const fullName = `${freelancer.first_name} ${freelancer.last_name}`;
      if (fullName === searchValue) {
        freelancers && router.push(`/freelancers/${freelancer.username}`)
      }
    })
  }

  return (
    <Box
      className={styles.mainNav}
      sx={{
        backgroundColor: theme.palette.accent.light,
        boxShadow: `0 0 5px ${theme.palette.accent.primary}`,
      }}
    >
      <Menu display={display} />
      <Image
        width={62}
        height={41}
        src="/images/header_logo.png"
        alt="علمنى"
        priority
      />
      <Stack direction="row" gap="65px" display={media && 'none'}>
        {navLinks.map((link, index) => (
          <Link
            className={styles.navLinks}
            sx={{
              color:
                link.href === router.pathname
                  ? theme.palette.accent.dark
                  : theme.palette.accent.primary,
              fontWeight: link.href === router.pathname && 'bold',
              textDecoration: 'none',
            }}
            key={index}
            href={
              link.title === 'صاحب عمل'
                ? isLoggedIn
                  ? link.href
                  : '/signin'
                : link.href
            }
          >
            {link.title}
          </Link>
        ))}
      </Stack>
      <>
      <Box
        
        sx={{ display: 'flex', cursor: 'pointer' }}
      >
        <OutlinedInput
          className={styles.mainNavSearch}
          variant="outlined"
          placeholder="ابحث عن مستقلين"
          id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onFocus={handleClick}
          dir="ltr"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          inputProps={{ style: { textAlign: 'end', borderRadius: '25px' } }}
          sx={{ display: media && 'none', borderRadius: '25px' }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton onClick={handleSearchClick} aria-label="toggle password visibility" edge="start">
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <MenuList disableEnforceFocus disableAutoFocus disableAutoFocusItem sx={{borderRadius: "25px"}} autoFocus={false} anchorEl={anchorEl} open={open} onClose={closingHandle}>
        {
          freelancers.map(freelancer => {
            const fullName = `${freelancer.first_name} ${freelancer.last_name}`;

            if (fullName.includes(searchValue)) {

              return <MenuItem key={freelancer.username} onClick={() => {setAnchorEl(null); setSearchValue(fullName)}} sx={{ width: '409px', justifyContent: 'flex-end' }}>
                {fullName}
              </MenuItem>
            }
          })
        }
      </MenuList>
      </>
      {!isLoggedIn ? (
        <Stack direction="row" gap="20px" display={media && 'none'}>
          <Link href="/signup">
            <Button variant="outlined" color="secondary">
              إنشاء حساب
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="contained" color="secondary">
              تسجيل دخول
            </Button>
          </Link>
        </Stack>
      ) : (
        <Dropper />
      )}
      <MenuIcon
        sx={{
          color: theme.palette.primary.main,
          cursor: 'pointer',
          display: !media && 'none',
        }}
        onClick={handleMenuClick}
      />
    </Box>
  );
};

export default Header;
