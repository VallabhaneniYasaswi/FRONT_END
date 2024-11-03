import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          {/* Centered Title with Custom Font and Color */}
          <Typography
            variant="h5" // Changed to h5 for larger text
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              color: 'white', // Changed to white
              fontFamily: 'Times New Roman, Times, serif',
              fontWeight: 'bold',
            }}
          >
            KL-ERP
          </Typography>
          
          {/* Profile Icon and Registration Number with Black Color */}
          {auth && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'black' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ color: 'black' }}
              >
                <AccountCircle />
              </IconButton>
              <Typography variant="body1" component="span" sx={{ color: 'black' }}>
                2300032494
              </Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
