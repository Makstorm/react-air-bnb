import React from "react";
import "./index.css";

interface Props {
  children: React.ReactElement | React.ReactNode;
  border?: boolean;
}

const Heading: React.FC<Props> = ({ children, border }) => {
  return (
    <span className={`heading ${border ? "heading--border" : ""}`}>
      {children}
    </span>
  );
};

export default Heading;
