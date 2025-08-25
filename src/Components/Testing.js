import React, { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? <MdToggleOn size={40} color="green" /> : <MdToggleOff size={40} color="red" />}
    </button>
  );
}
