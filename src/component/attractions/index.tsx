import React from "react";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

interface Props {
  nearbyAttractions: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Attractions: React.FC<Props> = ({ ...rest }) => {
  return (
    <Box className="details" shadow>
      <Heading border>Памʼятники поблизу</Heading>

      <List {...rest} />
    </Box>
  );
};

interface ListProps {
  nearbyAttractions: {
    id: number;
    name: string;
    link: string;
  }[];
}

const List: React.FC<ListProps> = ({ nearbyAttractions }) => {
  return (
    <ul className="details__list">
      {nearbyAttractions.map((el) => (
        <ListItem key={el.id}>
          <a className="details__item" href={el.link}>
            {el.name}
          </a>
        </ListItem>
      ))}
    </ul>
  );
};

export default Attractions;
