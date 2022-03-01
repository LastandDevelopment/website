import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRounded from '@mui/icons-material/MenuRounded';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import LastandDevelopmentLogo from './icons/LastandDevelopmentLogo.svg';

import 'fontsource-roboto';


export default function TitleBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="primary" enableColorOnDark elevation="0" >
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Button
                            color='secondary'
                        >
                            <img src={LastandDevelopmentLogo} className="LDLogo" alt="logo" style={{ height: 30 }} />
                        </Button>
                    </Box>
                    <IconButton
                        size="large"
                        color="secondary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuRounded />
                    </IconButton>
                    <Menu
                        PaperProps={{
                            style: {
                                width: 230,
                            },
                        }}
                        id="basic-menu"
                        backgroundColor='primary'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <CodeRoundedIcon fontSize="medium" />
                            </ListItemIcon>
                            <ListItemText>Projects</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosRoundedIcon fontSize="small" />
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <EmailRoundedIcon fontSize="medium" />
                            </ListItemIcon>
                            <ListItemText>Contact</ListItemText>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}