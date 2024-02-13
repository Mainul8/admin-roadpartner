import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Roadpartner from './pages/Dashboard/Roadpartner.jsx';
import Services from './pages/Form/Services.jsx';
import Blogs from './pages/Form/Blogs.jsx';
import QA from './pages/Form/QA.jsx';
import Profile from './pages/Profile';
import Shops from './pages/Shops.jsx';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      <Route
          index
          element={
            <>
              <PageTitle title="Sign Up | Roadpartner Admin" />
              <SignUp />
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <PageTitle title="Sign In | Roadpartner Admin" />
              <SignIn />
            </>
          }
        />
        <Route
          path='/dashboard/roadpartner'
          element={
            <>
              <PageTitle title="Roadpartner Dashboard | Roadpartner Admin" />
              <Roadpartner />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Roadpartner Admin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Roadpartner Admin" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/services"
          element={
            <>
              <PageTitle title="Services | Roadpartner Admin" />
              <Services />
            </>
          }
        />
        <Route
          path="/forms/qa"
          element={
            <>
              <PageTitle title="Q&A | Roadpartner Admin" />
              <QA />
            </>
          }
        />
        <Route
          path="/forms/blogs"
          element={
            <>
              <PageTitle title="Blogs | Roadpartner Admin" />
              <Blogs />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Roadpartner Admin" />
              <Tables />
            </>
          }
        />
        <Route
          path="/shops"
          element={
            <>
              <PageTitle title="Shops | Roadpartner Admin" />
              <Shops />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Roadpartner Admin" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Roadpartner Admin" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Roadpartner Admin" />
              <Buttons />
            </>
          }
        />
        {/* <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        /> */}
        {/* <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
