import React from "react";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import icon_1 from "./icon_1.svg";
import icon_2 from "./icon_2.svg";
import icon_3 from "./icon_3.svg";

interface Props {
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

const Details: React.FC<Props> = ({ ...rest }) => {
  return (
    <Box className="details" shadow>
      <Heading border>Деталі властивості:</Heading>

      <List {...rest} />
    </Box>
  );
};

interface ListProps {
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

const List: React.FC<ListProps> = ({ guests, bedrooms, beds, baths }) => {
  return (
    <ul className="details__list">
      <ListItem imageSrc={icon_1}>
        <span>{guests}</span>
        <span>Гості</span>
      </ListItem>

      <ListItem imageSrc={icon_2}>
        <span>{bedrooms}</span>
        <span>{bedrooms > 1 ? "Спальні" : "Спальня"}</span>
      </ListItem>

      <ListItem imageSrc={icon_3}>
        <span>{beds}</span>
        <span>{beds > 1 ? "Ліжка" : "Ліжко"}</span>
      </ListItem>

      <ListItem>
        <span>{baths}</span>
        <span>{baths > 1 ? "Ванні кімнати" : "Ванна кімната"}</span>
      </ListItem>
    </ul>
  );
};

export default Details;
