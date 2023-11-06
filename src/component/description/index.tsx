import React from "react";
import "./index.css";
import Heading from "../heading";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const Description: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="description">
      <Heading>{title}</Heading>

      <p className="description__text">{children}</p>
    </div>
  );
};

export default Description;
