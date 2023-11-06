import React from "react";
import "./index.css";

interface Props {
  children?: React.ReactElement[];
  className?: string;
  shadow?: boolean;
}

const Box: React.FC<Props> = ({ children, className, shadow }) => {
  return (
    <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Box;
