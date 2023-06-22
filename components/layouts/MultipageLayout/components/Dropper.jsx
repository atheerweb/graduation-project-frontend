// MUI Components
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
// Hooks
// import useMediaQuery from '@mui/material/useMediaQuery';
import client from '@/lib/client';

import { useState } from 'react';
import { useRouter } from 'next/router';

const Dropper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const media = useMediaQuery('(max-width: 1100px)');
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    client
      .post('/accounts/api/logout/', {
        username: 'aamerov',
        password: 'aamer-20162020',
      })
      .then(localStorage.removeItem('user'))
      .then(router.push('/'));
  };

  const closingHandle = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ display: 'flex', cursor: 'pointer' }}
      >
        <Avatar src={''} alt="Avatar" />
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={closingHandle}>
        <MenuItem
          onClick={handleClose}
          sx={{ width: 'full', justifyContent: 'flex-end' }}
        >
          تسجيل الخروج
        </MenuItem>
      </Menu>
    </>
  );
};

export default Dropper;
