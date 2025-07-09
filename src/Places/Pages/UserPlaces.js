import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Eiffel Tower',
    description: 'A wrought-iron lattice tower on the Champ de Mars in Paris, France.',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np77l--KHoPs-fxibzZnJ0IBGt3ldkX-33NBUr8rdI3c439PL8BODi2yZDY7dx8JUeU21iJkiaErDFtCWJ6grY8yI83nYK7MGXLixl1WBnVOv7dYcW6RfzRWCnX-q-8JuB-1cXZCmFW7WA=w408-h544-k-no',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8588443,
      lng: 2.2943506
    },
    creator: 'u2'
  },{
    id: 'p3',
    title: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island in New York City.',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no9XaHeCnkejNpp1VWI28fV5t8gERMHkDUXi6cSwMkytULffSeQF5aJLMEUV82m-uKNsauKVsG8WVj-H5rbQNwGNdmGIIiAhgy1mQ_bGDWJ-knqxhoBJZo7bocrPmNrODbnpwkl=w408-h544-k-no',
    address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
    location: {
      lat: 41.8902102,
      lng: 12.4922316
    },
    creator: 'u3'
  }
];

const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;