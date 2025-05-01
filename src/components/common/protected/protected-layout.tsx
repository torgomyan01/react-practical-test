import { Navigate, Outlet } from "react-router-dom";
import { localStorageKeys, SITE_URL } from "../../../utils/constant";
import { setUser } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProtectedLayout = () => {
  const dispatch = useDispatch();
  const getUserInfo = localStorage.getItem(localStorageKeys.user);

  useEffect(() => {
    if (getUserInfo) {
      dispatch(setUser(JSON.parse(getUserInfo)));
    }
  }, [dispatch, getUserInfo]);

  if (!getUserInfo) {
    return <Navigate to={SITE_URL.SIGN_IN} />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
