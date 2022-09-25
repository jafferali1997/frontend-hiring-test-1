import React from "react";
import { convertSecondsToMin } from "../../assets";
import TypeColor from "../../HOC/TypeColor";

export default function DurationRepresentation({ duration }) {
  let timeObject = convertSecondsToMin(duration);

  return (
    <p>
      {timeObject.min} minutes {timeObject.sec} seconds
    </p>
  );
}
