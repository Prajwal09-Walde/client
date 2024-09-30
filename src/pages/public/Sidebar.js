import { Category, Dashboard, GroupAdd, Login, Person3 } from '@mui/icons-material';
import Work from '@mui/icons-material/Work';
import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import dashboardLogo from "../../images/hr-proj-logo.png";
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';



export const Sidebar = () => {

  const { userInfo } = useSelector(state => state?.signIn);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(userProfileAction())
  }, []);

  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500)
  }
  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
          <Box>
            <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>
              {userInfo && (
                <Avatar src={dashboardLogo} alt="Dashboard Logo" sx={{ width: 100, height: 100 }} />
              )}
            </Box>

            <List>
              {userInfo && userInfo?.role === 1 ? (
                <>
                  <ListItem button component={Link} to="/admin/dashboard">
                    <ListItemIcon><Dashboard sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ color: "#fafafa" }} />
                  </ListItem>
                  <ListItem button component={Link} to="/admin/allusers">
                    <ListItemIcon><GroupAdd sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Users" sx={{ color: "#fafafa" }} />
                  </ListItem>
                  <ListItem button component={Link} to="/admin/jobs">
                    <ListItemIcon><Work sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Jobs" sx={{ color: "#fafafa" }} />
                  </ListItem>
                  <ListItem button component={Link} to="/admin/category">
                    <ListItemIcon><Category sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Categories" sx={{ color: "#fafafa" }} />
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem button component={Link} to="/user/dashboard">
                    <ListItemIcon><Dashboard sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ color: "#fafafa" }} />
                  </ListItem>
                  <ListItem button component={Link} to="/user/jobs">
                    <ListItemIcon><Work sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Jobs" sx={{ color: "#fafafa" }} />
                  </ListItem>
                  <ListItem button component={Link} to="/user/info">
                    <ListItemIcon><Person3 sx={{ color: palette.secondary.main }} /></ListItemIcon>
                    <ListItemText primary="Personal Info" sx={{ color: "#fafafa" }} />
                  </ListItem>
                </>
              )}
            </List>
          </Box>

          <Box sx={{ pb: 2 }}>
            <Divider />
            <ListItem button onClick={logOut}>
              <ListItemIcon><Login sx={{ color: palette.secondary.main }} /></ListItemIcon>
              <ListItemText primary="Log Out" sx={{ color: "#fafafa" }} />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}



