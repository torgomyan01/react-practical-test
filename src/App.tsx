import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { SITE_URL } from "./utils/constant";
import PageNotFount from "./components/layout/404/page-not-fount";
import ProtectedLayout from "./components/common/protected/protected-layout";
import PublicLayout from "./components/common/protected/public-layout";
import { Home, SignIn, Signup, UserDetails, Users } from "./components/layout";
import CreateUser from "./components/layout/create-user/create-user";
import { ToastContainer } from "react-toastify";
import { useWindowSize } from "./hooks";
import { useSelector } from "react-redux";

// TODO: Add route guards based on authentication state
// - If the user IS authenticated, prevent access to `/signin` and `/signup` routes
// - If the user is NOT authenticated, prevent access to `/home`, `/users`, and `/users/:id`
// - You can use a `PrivateRoute` or `RequireAuth` wrapper component for protected pages
// - Consider redirecting:
//    - Authenticated users from `/signin` or `/signup` → to `/home`
//    - Unauthenticated users from protected pages → to `/signin`

function App() {
  // TODO create useWindowSize custom hook, and store window size and device information in the redux utilsSlice.ts used detectDevice action
  useWindowSize();

  const device = useSelector((state: IUtilsState) => state.utils.device);

  console.log(device); // Result device

  // Show a loading component while the system determines whether you are authenticated.

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path={SITE_URL.HOME} element={<Home />} />
            <Route
              path={SITE_URL.USER_DETAILS(null)}
              element={<UserDetails />}
            />
            <Route path={SITE_URL.USERS} element={<Users />} />
            <Route path={SITE_URL.CREATE_USER} element={<CreateUser />} />
          </Route>

          <Route element={<PublicLayout />}>
            <Route path={SITE_URL.SIGN_IN} element={<SignIn />} />
            <Route path={SITE_URL.SIGNUP} element={<Signup />} />
          </Route>

          <Route path="*" element={<PageNotFount />} />
          {/* TODO create a 404 not found page and show that for all routes that were not declared there */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
