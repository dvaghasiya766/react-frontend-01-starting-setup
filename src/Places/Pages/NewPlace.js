import React from "react";

import Input from "../../shared/components/FormElements/Input";
// import Button from "../../shared/components/FormElements/Button";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        // id="title"
        element="input"
        type="text"
        label="Title"
        // placeholder="Title"
        // validators={[]}
        // onInput={() => {}}
        errorText="Please enter a valid title."
      />
      {/* <Input
        id="description"
        element="textarea"
        label="Description"
        rows={5}
        placeholder="Description"
        validators={[]}
        errorText="Please enter a valid description (at least 5 characters)."
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        placeholder="Address"
        validators={[]}
        errorText="Please enter a valid address."
      /> 
      <button type="submit">ADD PLACE</button> */}
    </form>
  );
};

export default NewPlace;
