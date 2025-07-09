import React from "react";
import { Link } from "react-router-dom"; // Importing React Router for routing if needed
import Avatar from "../../Shared/Components/UIElement/Avatar.js";
import Card from "../../Shared/Components/UIElement/Card.js";
import "./UsersItem.css"; // Assuming you have a CSS file for styling

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
// This component renders a list of users. It can be used to display user-related information in a React application.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// It includes a heading and an unordered list with three sample users.
