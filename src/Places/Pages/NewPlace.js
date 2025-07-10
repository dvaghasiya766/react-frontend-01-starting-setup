import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
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
