import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { AdminRoute } from "./components/AdminRoute.js";
import UserRoute from "./components/userRoute.js";
import { AdminDashboard } from "./pages/admin/AdminDashboard.js";
import DashboardCategory from "./pages/admin/DashboardCategory.js";
import DashboardCreateCategory from "./pages/admin/DashboardCreateCategory.js";
import DashboardCreateJobs from "./pages/admin/DashboardCreateJobs.js";
import DashboardEditJobs from "./pages/admin/DashboardEditJobs.js";
import { DashboardJobs } from "./pages/admin/DashboardJobs.js";
import { DashboardUsers } from "./pages/admin/DashboardUsers.js";
import Home from "./pages/Home.js";
import LogIn from "./pages/LogIn.js";
import NotFound from "./pages/NotFound.js";
import { Layout } from "./pages/public/Layout.js";
import Register from "./pages/Register.js";
import { SingleJob } from "./pages/SingleJob.js";
import { UserDashboard } from "./pages/user/UserDashboard.js";
import { UserInfoDashboard } from "./pages/user/UserInfoDashboard.js";
import { UserJobsHistory } from "./pages/user/UserJobsHistory.js";
import { theme } from "./theme";

const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashboardUsersHOC = Layout(DashboardUsers);
const DashboardJobsHOC = Layout(DashboardJobs);
const DashboardCategoryHOC = Layout(DashboardCategory);
const DashboardCreateJobHOC = Layout(DashboardCreateJobs);
const DashboardCreateCategoryHOC = Layout(DashboardCreateCategory);
const DashboardAdminEditJobHOC = Layout(DashboardEditJobs);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/location/:location' element={<Home />} />
            <Route path='/search/:kw' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
            <Route path="/job/:id" element={<SingleJob />} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
            <Route path="/admin/users" element={<AdminRoute><DashboardUsersHOC /></AdminRoute>} />
            <Route path="/admin/jobs" element={<AdminRoute><DashboardJobsHOC /></AdminRoute>} />
            <Route path="/admin/category" element={<AdminRoute><DashboardCategoryHOC /></AdminRoute>} />
            <Route path="/admin/job/create" element={<AdminRoute><DashboardCreateJobHOC /></AdminRoute>} />
            <Route path="/admin/edit/job/:id" element={<AdminRoute><DashboardAdminEditJobHOC /></AdminRoute>} />
            <Route path="/admin/category/create" element={<AdminRoute><DashboardCreateCategoryHOC /></AdminRoute>} />
            <Route path="/user/dashboard" element={<AdminRoute><UserDashboardHOC /></AdminRoute>} />
            <Route path="/user/jobs" element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
            <Route path="/user/info" element={<UserRoute><UserInfoDashboardHOC /></UserRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;