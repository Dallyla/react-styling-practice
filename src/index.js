import React from "react";
import ReactDOM from "react-dom";

const time = new Date(2020, 9, 2, 18);
const timeNow = time.getHours();
let hour = "0";
let customColor = { color: "" };

if (timeNow < 12) {
  hour = "Morning";
  customColor.color = "red";
} else if (timeNow >= 12 && timeNow <= 18) {
  hour = "Afternoon";
  customColor.color = "green";
} else {
  hour = "Evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customColor}>
      Good {hour}.
    </h1>
  </div>,
  document.getElementById("root")
);
