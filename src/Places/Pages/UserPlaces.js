import React from "react";
import PlaceList from "../Components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noVO2t9KsvULh58XSof_1ayP09x1Hn_mdL-Z0GNH9dTvTQFCnoz8J_61EopBy_FjNynOS__0OwM_gYuNZs9z9AF02MJAN_dgE9XjHHsosjkp1hXcK91Hw9e83fCk0F8vqM8DfLc=w408-h272-k-no",
    address: "20 W 34th St, New York, NY 10001, USA",
    creator: "u1",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description: "A colossal neoclassical sculpture on Liberty Island.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no9XaHeCnkejNpp1VWI28fV5t8gERMHkDUXi6cSwMkytULffSeQF5aJLMEUV82m-uKNsauKVsG8WVj-H5rbQNwGNdmGIIiAhgy1mQ_bGDWJ-knqxhoBJZo7bocrPmNrODbnpwkl=w408-h544-k-no",
    address: "Liberty Island, New York, NY 10004, USA",
    creator: "u2",
    location: {
      lat: 40.689247,
      lng: -74.044502,
    },
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
