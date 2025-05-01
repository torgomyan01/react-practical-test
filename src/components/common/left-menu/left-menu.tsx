import { Link, useLocation } from "react-router-dom";
import { SITE_URL } from "../../../utils/constant";
import clsx from "clsx";

const menu = [
  {
    name: "Home",
    link: SITE_URL.HOME,
  },
  {
    name: "Users",
    link: SITE_URL.USERS,
  },
  {
    name: "Create User",
    link: SITE_URL.CREATE_USER,
  },
];

function LeftMenu() {
  const history = useLocation();

  return (
    <div className="min-w-[300px] bg-white shadow h-[calc(100dvh-57px)] p-4">
      <div className="flex-js-s flex-col gap-1">
        {menu.map((item, index) => (
          <Link
            to={item.link}
            key={`lm-${index}`}
            className={clsx(
              "w-full px-4 py-2 transition hover:bg-black/5 flex-js-c rounded-[6px] border-b",
              {
                "!bg-blue-500 text-white": item.link === history.pathname,
              },
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LeftMenu;
