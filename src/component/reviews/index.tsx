import React, { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";

interface Props {
  guestReviews: {
    id: number;
    guestName: string;
    rating: number;
    review: string;
  }[];
}

const Reviews: React.FC<Props> = ({ guestReviews }) => {
  return (
    <div className="review__block">
      <Heading>Відгуки</Heading>
      <div className="review__list">
        {guestReviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

interface ItemProps {
  guestName: string;
  rating: number;
  review: string;
}

const Item: React.FC<ItemProps> = ({ guestName, rating, review }) => {
  return (
    <Box className="review">
      <div className="review__title">
        <span className="review__title--bold ">{guestName}</span>
        <span>Рейтинг: {rating}</span>
      </div>
      <span className="review__info">{review}</span>
    </Box>
  );
};
