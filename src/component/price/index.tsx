import React from "react";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

interface Props {
  price: number;
  discount: number;
  currency: string;
  cleaning: number;
  service: number;
  checkin: string;
  checkout: string;
}

const Price: React.FC<Props> = ({ price, discount, currency, ...rest }) => {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>

      <List {...rest} currency={currency} />
    </Box>
  );
};

interface ListProps {
  currency: string;
  cleaning: number;
  service: number;
  checkin: string;
  checkout: string;
}

const List: React.FC<ListProps> = ({
  currency,
  cleaning,
  service,
  checkin,
  checkout,
}) => {
  return (
    <ul className="price__list">
      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      <ListItem>
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>

      <ListItem>
        <span>Дата відʼїзду:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
};

export default Price;
