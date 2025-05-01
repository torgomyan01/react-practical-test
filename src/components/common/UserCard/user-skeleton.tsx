import s from "./styles.module.scss";

export const UserCardSkeleton = () => {
  return (
    <div className={s.userCard}>
      <div className="h-[170px] bg-gray-200 rounded-[8px] dark:bg-gray-700 w-full mb-4"></div>

      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3 mt-4"></div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-44 mb-2"></div>
    </div>
  );
};
