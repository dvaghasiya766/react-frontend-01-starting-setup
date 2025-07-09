import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
// This component is a simple functional component that renders a heading and a paragraph.
// It can be used to display user-related information in a React application.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
