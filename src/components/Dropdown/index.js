import React, { useState } from "react";
import Dropdown from "./Dropdown.js";

const colorOptions = [
  {
    label: "Fire Red",
    value: "red",
  },
  {
    label: "Ocean Blue",
    value: "blue",
  },
  {
    label: "Hot Pink",
    value: "pink",
  },
];

const DropdownPage = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="DropdownPage">
      <Dropdown
        onOptionClick={setSelected}
        options={colorOptions}
        title="Select Color"
      />
      {selected ? (
        <p
          className={`DropdownPage__para DropdownPage__para--${selected}`}
        >{`This text is ${selected}`}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownPage;
