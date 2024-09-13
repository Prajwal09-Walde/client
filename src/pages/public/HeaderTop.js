import { DarkMode, LightMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const [ isDrawerOpen, setIsDrawerOpen ] = React.useState(false);
    const { palette } = useTheme();
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ boxShadow: 0 }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        HR Portal
                    </Typography>

                    <IconButton onClick={() => dispatch(toggleActionTheme())}>
                        {palette.mode === 'dark' ? (
                            <DarkMode sx={{ color: '#ffffff', fontSize: '25px' }} />
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

            <Drawer
              anchor='left'
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={{
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box'
                }
              }}
            >
                <Box 
                  sx={{width: 240, bgcolor: 'background.paper', height: '100%'}}
                  role='presentation'
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                   <List component={Link} to='/'>
                    <ListItem>
                        <ListItemButton sx={{color: palette.primary.main, mt: 4}}>Home</ListItemButton>
                    </ListItem>
                   </List>
                   <List component={Link} to='/login'>
                    <ListItem>
                        <ListItemButton sx={{color: palette.primary.main, mt: 2}}>Logout</ListItemButton>
                    </ListItem>
                   </List>
                </Box>
            </Drawer>
        </Box>
    )
}


