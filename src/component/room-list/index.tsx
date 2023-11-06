import React, { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";

type Room = {
  id: number;
  type: string;
  pricePerNight: number;
  currency: string;
  capacity: number;
};

interface Props {
  list: Room[];
}

const RoomList: React.FC<Props> = ({ list }) => {
  return (
    <div className="room__block">
      <Heading>Типи номерів</Heading>
      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RoomList;

interface ItemProps {
  type: string;
  pricePerNight: number;
  currency: string;
  capacity: number;
}

const Item: React.FC<ItemProps> = ({
  type,
  pricePerNight: price,
  currency,
  capacity,
}) => {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="room__info">Кількість гостей: {capacity}</span>
      <span className="room__price">
        {currency}
        {price}
      </span>
    </Box>
  );
};
