import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { SITE_URL } from "../../../utils/constant";

interface IThisProps {
  user: IDefaultUser;
}

export const UserCard = ({ user }: IThisProps) => {
  return (
    <Link to={SITE_URL.USER_DETAILS(user.id)} className={s.userCard}>
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className={s.avatar}
      />

      <h2 className={s.name}>
        {user.first_name} {user.last_name}
      </h2>
      <h3 className={s.email}>{user.email}</h3>
    </Link>
  );
};
