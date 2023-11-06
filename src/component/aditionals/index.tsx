import React from "react";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

interface Props {
  additional_properties: {
    house_rules: string;
    cancellation_policy: string;
    local_transportation: string;
    host_languages: string[];
    special_offers: string;
    check_in_instructions: string;
  };
}

const Aditionals: React.FC<Props> = ({ ...rest }) => {
  return (
    <Box className="details" shadow>
      <Heading border>Додаткові властивості</Heading>

      <List {...rest} />
    </Box>
  );
};

interface ListProps {
  additional_properties: {
    house_rules: string;
    cancellation_policy: string;
    local_transportation: string;
    host_languages: string[];
    special_offers: string;
    check_in_instructions: string;
  };
}

const names = [
  "Правила дому",
  "Політика скасування",
  "Місцевий транспорт",
  "Мови хоста",
  "Спеціальні пропозиції",
  "Інструкції щодо реєстрації",
];

const List: React.FC<ListProps> = ({ additional_properties }) => {
  const resArr = Object.entries(additional_properties).map(
    ([, value], index) => [names[index], value]
  );

  resArr[3][1] = resArr[3][1].join(", ");

  return (
    <ul className="details__list">
      {resArr.map(
        ([, value], index) =>
          value && (
            <ListItem title={names[index]}>
              <span>{value}</span>
            </ListItem>
          )
      )}
    </ul>
  );
};

export default Aditionals;
