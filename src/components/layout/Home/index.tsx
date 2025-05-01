import React, { useEffect, useState } from "react";
import MainTemplate from "../../common/main-template/main-template";
import { getUserById } from "../../../utils/requests";
import Loading from "../../common/loading/loading";

export const Home: React.FC = () => {
  // TODO make home page and show random user info used https://reqres.in/api/users/:id or other api as you wish

  const [user, setUser] = useState<IDefaultUser | null>(null);

  useEffect(() => {
    getUserById("2").then(({ data }) => {
      setUser(data.data);
    });
  }, []);

  return (
    <MainTemplate>
      {user ? (
        <div className="flex-js-s gap-5">
          <div className="w-[500px] bg-white p-4 rounded-[16px] border">
            <img
              src={user?.avatar}
              alt={`${user?.first_name} ${user?.last_name}`}
              className="w-full rounded-[12px]"
            />
          </div>
          <div className="pt-2">
            <h1 className="text-[30px] font-bold">
              {user?.first_name} {user?.last_name}
            </h1>
            <h2 className="text-black/50">{user?.email}</h2>
          </div>
        </div>
      ) : (
        <div className="w-full h-[400px] flex-jc-c">
          <Loading />
        </div>
      )}
    </MainTemplate>
  );
};
