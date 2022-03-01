import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="title" component="div">
                The Official Website of Lastand Development.
            </Typography>
            <Typography variant="body12" component="div">
                Here you can find all my projects and programs, straight from the developer.
            </Typography>
        </Box>
    )
}