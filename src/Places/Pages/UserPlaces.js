import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../Components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Effile Tower",
    description:
      "Gustave Eiffel's iconic, wrought-iron 1889 tower, with steps and elevators to observation decks.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np77l--KHoPs-fxibzZnJ0IBGt3ldkX-33NBUr8rdI3c439PL8BODi2yZDY7dx8JUeU21iJkiaErDFtCWJ6grY8yI83nYK7MGXLixl1WBnVOv7dYcW6RfzRWCnX-q-8JuB-1cXZCmFW7WA=w408-h544-k-no",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 48.8585409,
      lng: 2.2919231,
    },
    creator: "u1",
  },
  {
    id: "p4",
    title: "Statu Of Unity",
    description: "",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr0OgTx3RvJ2RI_krPRbZj5vdQvNhpHCq8vsBxcjX-tXA5xFdNwbPHz3sPL-RjFuHkeU4S6PheqNOhUk-A6h2fCUb9lWdPZIeP49c4bgWGOfZsjy0iP2wxFQdskq7kwHlf8VFu8nw=w408-h544-k-no",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 21.8565543,
      lng: 73.7062583,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
