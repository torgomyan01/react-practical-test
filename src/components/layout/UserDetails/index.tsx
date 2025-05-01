import React, { useEffect, useState } from "react";
import MainTemplate from "../../common/main-template/main-template";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../../utils/requests";
import Loading from "../../common/loading/loading";
import { SITE_URL } from "../../../utils/constant";

export const UserDetails = () => {
  // TODO  create userDetails page, show user info by id; id declared in the url params, dynamically read id and get specific info for that user

  const { id } = useParams();
  const [user, setUser] = useState<IDefaultUser | null>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then(({ data }) => {
        setUser(data.data);
      });
    }
  }, [id]);

  return (
    <MainTemplate>
      <div className="flex-js-c mb-6">
        <Link to={SITE_URL.USERS}>
          <i className="fa-light fa-reply mr-1" />
          Back
        </Link>
      </div>
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
