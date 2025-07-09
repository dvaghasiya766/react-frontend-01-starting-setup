import React from "react";

import Card from "../../Shared/Components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="place-item__fallback">
        <h2>No places found. Maybe create one?</h2>
        <button>Share Place</button>
      </Card>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
