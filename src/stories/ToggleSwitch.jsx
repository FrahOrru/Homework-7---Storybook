import React, { useState } from "react";

const ToggleSwitch = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
