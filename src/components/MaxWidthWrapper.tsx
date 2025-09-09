import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string | number;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = "",
  maxWidth = "1200px",
}) => {
  return (
    <div
      className={className}
      style={{
        maxWidth,
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
