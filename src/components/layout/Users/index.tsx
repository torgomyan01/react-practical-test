import React, { useEffect, useState } from "react";
import { getUsers } from "../../../utils/requests";
import MainTemplate from "../../common/main-template/main-template";
import { UserCard } from "../../common/UserCard";
import { UserCardSkeleton } from "../../common/UserCard/user-skeleton";
import clsx from "clsx";

export const Users = () => {
  // const [users, setUsers] = useState([]); // TODO define global type User type and , The state is to that type
  //
  // useEffect(() => {
  //   getUsers()
  //     .then((res) => console.log(res))
  //     .catch(() => console.log("error")); // TODO handle this error, for example use react toastify package and toast error
  // });

  const [users, setUsers] = useState<IDefaultUser[] | null>(null);
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 0,
  });

  useEffect(() => {
    StartGettingUsers(pages.page);
  }, []);

  function StartGettingUsers(page: number) {
    setUsers(null);

    getUsers(page, 10).then(({ data }) => {
      setUsers(data.data);

      setPages({
        page: data.page,
        totalPages: data.total_pages,
      });
    });
  }

  return (
    <MainTemplate>
      <h1 className="text-[25px] font-bold mb-6">All Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {users ? (
          users.map((user, index) => (
            <UserCard key={`user-cards-${index}`} user={user} />
          ))
        ) : (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <UserCardSkeleton key={`cards-${i}`} />
            ))}
          </>
        )}
      </div>

      <div className="flex-jc-c mt-6">
        <ul className="flex-jc-c gap-2">
          {Array.from({ length: pages.totalPages }).map((_, i) => (
            <li
              key={`pagination-${i}`}
              className={clsx(
                "w-[30px] h-[30px] flex-jc-c bg-black/10 rounded-[5px] text-black/80 cursor-pointer",
                {
                  "!bg-blue-600 !text-white": pages.page === i + 1,
                },
              )}
              onClick={() => StartGettingUsers(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </MainTemplate>
  );
};
