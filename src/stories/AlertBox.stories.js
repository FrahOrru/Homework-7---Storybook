import React from "react";
import { storiesOf } from "@storybook/react";
import AlertBox from "./AlertBox";

// AlertBox stories
storiesOf("AlertBox", module)
  .add("Info", () => (
    <AlertBox type="info" message="This is an informational message." />
  ))
  .add("Success", () => (
    <AlertBox type="success" message="Success! Your action was completed." />
  ))
  .add("Warning", () => (
    <AlertBox type="warning" message="Warning! Please proceed with caution." />
  ))
  .add("Error", () => (
    <AlertBox type="error" message="Error! Something went wrong." />
  ));
