import React from "react";
import "./index.css";
import avatar from "./Ellipse 3.png";
import Heading from "../heading";

interface Props {
  contact_info: {
    name: string;
    image: string;
    response_rate: number;
    response_time: string;
    info: string;
    phone: string;
  };
}

const Owner: React.FC<Props> = ({ contact_info }) => {
  return (
    <div className="description">
      <div className="description__header">
        <img src={avatar} alt="avatar" />

        <div className="description__info">
          <Heading>Господар — {contact_info.name}</Heading>
          <p className="description__text">
            {contact_info.phone} * {contact_info.response_time} *{" "}
            {contact_info.response_rate} відсотків швидкості відгуку
          </p>
        </div>
      </div>

      <p className="description__text">{contact_info.info}</p>
    </div>
  );
};

export default Owner;
