import React from "react";
import "./index.css";

interface Props {
  src: string;
  name: string;
}

const Photo: React.FC<Props> = ({ src, name }) => {
  return <img src={src} alt={name} className="photo" />;
};

export default Photo;
