import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRounded from '@mui/icons-material/MenuRounded';
import Button from '@mui/material/Button';

import LastandDevelopmentLogo from './icons/LastandDevelopmentLogo.svg';

import 'fontsource-roboto';


export default function TitleBar() {
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
                    >
                        <MenuRounded />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}