import { useTheme } from '@emotion/react';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import Person3Icon from '@mui/icons-material/Person3';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import dashboardLogo from '../../images/hr-proj-logo.png';
import { userLogoutAction } from '../../redux/actions/userAction';

export const Sidebar = () => {
  const { userInfo } = useSelector(state => state.signIn);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500)
  };
  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#003366',
            color: '#fafafa'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', 'height': '100%' }}>
          <Box>
            <Box sx={{ pt: 3, pb: 5, display: 'flex', justifyContent: 'center' }}>
              <Avatar alt='logo' src={dashboardLogo} sx={{ width: 100, height: 100 }} />
            </Box>

            <List>
              {userInfo && userInfo.role === 1 ? (
                <>
                  <ListItem button component={Link} to='/admin/dashboard'>
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                  </ListItem>
                  <ListItem button component={Link} to='/admin/users'>
                    <ListItemIcon>
                      <GroupAddIcon sx={{ color: palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary='Users' />
                  </ListItem>
                  <ListItem button component={Link} to='/admin/jobs'>
                    <ListItemIcon>
                      <GroupAddIcon sx={{ color: palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary='Jobs' />
                  </ListItem>
                  <ListItem button component={Link} to='/admin/category'>
                    <ListItemIcon>
                      <CategoryIcon sx={{ color: palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary='Categories' />
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem button component={Link} to='/user/dashboard'>
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                  </ListItem>
                  <ListItem button component={Link} to='/user/jobs'>
                    <WorkHistoryIcon sx={{ color: palette.primary.main }} />
                  </ListItem>
                  <ListItemText primary='Jobs' />
                  <ListItem button component={Link} to='/user/info'>
                    <ListItemIcon>
                      <Person3Icon primary='Personal Info' />
                    </ListItemIcon>
                  </ListItem>
                </>
              )}
            </List>
          </Box>

          <Box sx={{ pb: 2 }}>
            <List>
              <ListItem button onClick={logOut}>
                <ListItemIcon>
                  <LoginIcon sx={{ color: palette.primary.main }} />
                </ListItemIcon>
                <ListItemText primary='Log Out' />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}


