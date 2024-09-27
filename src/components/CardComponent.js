import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Card, CardActions, CardContent, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const CardComponent = ({ jobTitle, description, category, location, id }) => {
    const { palette } = useTheme();
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: palette.primary.white }}>
            <CardContent>
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 16 }} /></IconButton> {location}
                </Typography>
                <Typography variant='h5' component='div'>
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category}
                </Typography>
                <Typography variant='body2'>
                    Description: {description?.split(" ").slice(0, 15).join(" ") + "..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant='contained' size='small' startIcon={<AddIcon />}>
                    <Link style={{ textDecoration: 'none', color: 'white', boxShadow: 0 }} to={`/job/${id}`}>More Details</Link>
                </Button>
            </CardActions>
        </Card>
    )
}


