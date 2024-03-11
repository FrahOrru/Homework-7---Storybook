import React from "react";
import { storiesOf } from "@storybook/react";
import ToggleSwitch from "./ToggleSwitch";

// ToggleSwitch stories
storiesOf("ToggleSwitch", module)
  .add("Off", () => (
    <ToggleSwitch
      onChange={(isChecked) => console.log("ToggleSwitch Off:", isChecked)}
    />
  ))
  .add("On", () => (
    <ToggleSwitch
      onChange={(isChecked) => console.log("ToggleSwitch On:", isChecked)}
    />
  ));
