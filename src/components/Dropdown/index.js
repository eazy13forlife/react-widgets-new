import React, { useState } from "react";
import Dropdown from "./Dropdown.js";

const DropdownPage = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="DropdownPage">
      <Dropdown onOptionClick={setSelected} />
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
