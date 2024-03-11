import React from "react";

const AlertBox = ({ type = "info", message }) => {
  let alertClass = "alert";

  if (type === "success") {
    alertClass += " success";
  } else if (type === "warning") {
    alertClass += " warning";
  } else if (type === "error") {
    alertClass += " error";
  }

  return <div className={alertClass}>{message}</div>;
};

export default AlertBox;
