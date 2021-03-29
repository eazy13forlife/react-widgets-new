import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";

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
const Dropdown = ({ onOptionClick }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.querySelector("body").addEventListener("click", closeDropdown);

    return () => {
      document
        .querySelector("body")
        .removeEventListener("click", closeDropdown);
    };
  }, []);

  const renderedColorOptions = colorOptions.map((object, index) => {
    if (object.label !== selected) {
      return (
        <p
          key={index}
          className="Dropdown__option"
          onClick={() => {
            setSelected(object.label);
            onOptionClick(object.value);
            setOpen(false);
          }}
        >
          {object.label}
        </p>
      );
    }
  });

  return (
    <div ref={dropdownRef} className={`Dropdown ${open ? "open" : ""}`}>
      <div
        className="Dropdown__header"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h2 className="Dropdown__heading">
          {selected ? selected : "Select Color"}
        </h2>
        <img
          src="https://img.icons8.com/ios-filled/26/000000/long-arrow-down.png"
          className="Dropdown__icon"
        />
      </div>
      <div className="Dropdown__options">{renderedColorOptions}</div>
    </div>
  );
};
export default Dropdown;
