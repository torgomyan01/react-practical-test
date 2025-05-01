import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { localStorageKeys, SITE_URL } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import s from "./styles.module.scss";
import { setUser } from "../../../store/userSlice";

// TODO make top navbar go to users page, home page, user details and logout
export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: IUserState) => state.userSlice.user);

  function LogOut() {
    localStorage.removeItem(localStorageKeys.user);
    dispatch(setUser(null));
    navigate(SITE_URL.SIGN_IN);
  }

  return (
    <nav className="w-full h-[56px] bg-blue-500 px-6 flex-jsb-c">
      <Link to={SITE_URL.HOME} className="text-white text-2xl font-bold">
        TEST
      </Link>
      {user && (
        <div className={s.navbarDropdown}>
          <button className={s.trigger}>{user?.email}</button>
          <div className={s.body}>
            <Link to={SITE_URL.USER_DETAILS(2)} className={s.bodyItem}>
              <i className="fa-regular fa-user mr-1"></i>
              My Account
            </Link>
            <div className={s.bodyItem} onClick={LogOut}>
              <i className="fa-solid fa-right-from-bracket mr-1"></i>
              Logout
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
