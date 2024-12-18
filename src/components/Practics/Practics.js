import React, { Children, useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const CustomSwitch = ({ children, value }) => {
  let cases = [];
  let defaults = [];
  children.forEach((val) => {
    if (val.type.name === "CustomCase") {
      if (typeof val.props.value === "function") {
        if (val.props.value(value)) {
          cases.push(val);
          console.log("function");
        }
      } else if (val.props.value === value) {
        console.log(val.props.value);
        cases.push(val);
      }
    } else if (val.type.name === "DefaultCase") {
      defaults.push(val);
    }
  });

  if (cases.length > 0) {
    return cases;
  } else {
    return defaults;
  }
};

const CustomCase = ({ children }) => {
  return <div>{children}</div>;
};

const DefaultCase = ({ children }) => {
  return <div>{children}</div>;
};

function Practics() {
  return (
    <>
      <CustomSwitch value="30">
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
