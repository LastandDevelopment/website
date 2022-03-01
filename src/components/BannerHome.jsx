import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import LastandDevelopmentLogo from './icons/LastandDevelopmentLogo.svg';

import 'fontsource-roboto';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(12),
    '@media all': {
        minHeight: 128,
    },
}));

export default function BannerHome() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" color="primary" enableColorOnDark elevation="0" >
                <StyledToolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <img src={LastandDevelopmentLogo} className="LDLogo" alt="logo" style={{ height: 150 }} component="div" sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1 }} height />
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}