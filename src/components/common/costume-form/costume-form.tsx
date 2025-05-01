import React, { ReactNode } from "react";

interface IThisProps {
  onSubmit: () => void;
  children: ReactNode;
}

function CostumeForm({ onSubmit, children }: IThisProps) {
  const Submit = (e: React.KeyboardEvent<HTMLDivElement>) =>
    e.key === "Enter" && onSubmit();

  return <div onKeyUp={Submit}>{children}</div>;
}

export default CostumeForm;
