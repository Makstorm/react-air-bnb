import React from "react";
import "./index.css";

interface Props {
  children: React.ReactElement | React.ReactNode;
  imageSrc?: string;
  title?: string;
}

const ListItem: React.FC<Props> = ({ children, imageSrc, title }) => {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} src={imageSrc} alt="icon" />}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
};

export default ListItem;
