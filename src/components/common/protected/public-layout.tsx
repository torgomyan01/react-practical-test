import { Navigate, Outlet } from "react-router-dom";
import { localStorageKeys, SITE_URL } from "../../../utils/constant";

const PublicLayout = () => {
  const getUserInfo = localStorage.getItem(localStorageKeys.user);
  if (getUserInfo) {
    return <Navigate to={SITE_URL.HOME} />;
  }
  return <Outlet />;
};

export default PublicLayout;
