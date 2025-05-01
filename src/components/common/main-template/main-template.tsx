import React from "react";
import { Navbar } from "../Navbar";
import LeftMenu from "../left-menu/left-menu";

interface IThisProps {
  children?: React.ReactNode;
  cleanTemplate?: boolean;
}

// TODO Create a layout for authenticated users, using the <Navbar /> component along with the page component

function MainTemplate({ children, cleanTemplate = false }: IThisProps) {
  return (
    <main className="bg-gray-50">
      {cleanTemplate ? (
        children
      ) : (
        <>
          <Navbar />

          <div className="flex-js-s w-full">
            <LeftMenu />
            <div className="w-full p-6 h-[calc(100dvh-57px)] overflow-y-auto">
              {children}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default MainTemplate;
