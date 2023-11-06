import React from "react";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import icon_1 from "./icon_1.svg";
import icon_2 from "./icon_2.svg";
import icon_3 from "./icon_3.svg";
import icon_4 from "./icon_4.svg";
import icon_5 from "./icon_5.svg";
import icon_6 from "./icon_6.svg";
import icon_7 from "./icon_7.svg";
import icon_8 from "./icon_8.svg";
import icon_9 from "./icon_9.svg";
import icon_10 from "./icon_10.svg";

interface Props {
  amenities: {
    hasPool: boolean;
    hasGym: boolean;
    hasFreeBreakfast: boolean;
    hasFreeWiFi: boolean;
    hasParking: boolean;
    hasPetsAllowed: boolean;
    hasAirportShuttle: boolean;
    hasConciergeService: boolean;
    hasRoomService: boolean;
    hasChildFriendly: boolean;
  };
}

const Amenities: React.FC<Props> = ({ ...rest }) => {
  return (
    <Box className="details" shadow>
      <Heading border>Зручності</Heading>

      <List {...rest} />
    </Box>
  );
};

interface ListProps {
  amenities: {
    hasPool: boolean;
    hasGym: boolean;
    hasFreeBreakfast: boolean;
    hasFreeWiFi: boolean;
    hasParking: boolean;
    hasPetsAllowed: boolean;
    hasAirportShuttle: boolean;
    hasConciergeService: boolean;
    hasRoomService: boolean;
    hasChildFriendly: boolean;
  };
}

const names = [
  "Басейн",
  "Спортивний зал",
  "Безкоштовний сніданок",
  "Безкоштовний Wi-Fi",
  "Безкоштовний вуличний паркінг",
  "Дозволено розміщення з домашніми тваринами",
  "Трансфер до/з аеропорту",
  "Консьєрж-сервіс",
  "Обслуговування номерів",
  "Підходить для дітей",
];
const images = [
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  icon_10,
];

const List: React.FC<ListProps> = ({ amenities }) => {
  const resArr = Object.entries(amenities).map(([, value], index) => [
    names[index],
    value,
  ]);

  return (
    <ul className="details__list">
      {resArr.map(
        ([key, value], index) =>
          value && (
            <ListItem imageSrc={images[index]}>
              <span>{key}</span>
            </ListItem>
          )
      )}
    </ul>
  );
};

export default Amenities;
