import React from "react";
import "./index.css";

interface Props {
  title: string;
  rating: number;
  review: number;
  city: string;
  country: string;
  superhost: boolean;
}

const Page: React.FC<Props> = ({
  title,
  rating,
  review,
  city,
  country,
  superhost,
}) => {
  return (
    <div className="title">
      <h1 className="title__text">{title}</h1>

      <div className="title__sub-block">
        <span className="title__sub-value">{rating} рейтинг</span>
        <span className="title__sub-value">{review} вілгуків</span>
        <span className="title__sub-value">
          {city}, {country}
        </span>

        {superhost && <span className="title__sub-value">Супер-хост</span>}
      </div>
    </div>
  );
};

export default Page;
