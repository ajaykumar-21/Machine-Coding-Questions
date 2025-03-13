import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const CustomSwitch = (val) => {
  const { value, children } = val;

  const cases = [];
  const defaults = [];

  children.forEach((e) => {
    if (e.type.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e);
        }
      } else if (e.props.value === value) {
        cases.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaults.push(e);
    }
  });

  if (cases.length > 0) {
    return cases;
  } else {
    return defaults;
  }
};

const CustomCase = (val) => {
  return <h1>{val.children}</h1>;
};

const DefaultCase = (val) => {
  return <h1>{val.children}</h1>;
};
function Practics() {
  return (
    <>
      <CustomSwitch value="10">
        <CustomCase value={(e) => e < 10}>
          <div>Hello less than 10</div>
        </CustomCase>
        <CustomCase value="20">Hello 20</CustomCase>
        <CustomCase value="30">Hello 30</CustomCase>
        <CustomCase value="10">
          <div>Hello 10</div>
        </CustomCase>
        <DefaultCase>Hello 40</DefaultCase>
      </CustomSwitch>
    </>
  );
}

export default Practics;
