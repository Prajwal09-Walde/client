import { DarkMode, LightMode } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleActionTheme } from '../../redux/actions/themeAction';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const HeaderTop = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ boxShadow: 0 }}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        HR Portal
                    </Typography>

                    <IconButton onClick={() => dispatch(toggleActionTheme())}>
                        {palette?.mode === 'dark' ? (
                            <DarkMode sx={{ color: '#000000', fontSize: '25px' }} />
                        ) : (
                            <LightMode sx={{ color: '#ffffff', fontSize: '25px' }} />
                        )}
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search...'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


