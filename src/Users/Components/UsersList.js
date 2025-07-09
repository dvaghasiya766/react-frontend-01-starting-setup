import React from "react";
import "./UsersList.css"; // Assuming you have a CSS file for styling
import UsersItem from "./UsersItem";
import Card from "../../Shared/Components/UIElement/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
// This component renders a list of users. It can be used to display user-related information in a React application.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// It includes a heading and an unordered list with three sample users.
