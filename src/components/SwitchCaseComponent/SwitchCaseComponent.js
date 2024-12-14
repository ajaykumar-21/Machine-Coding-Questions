import React from "react";
import style from "./SwitchCaseComponent.module.css";

const CustomSwitch = (val) => {
  console.log(val);
  const { value, children } = val;

  let cases = [];
  let defaults = [];

  children.forEach((e) => {
    if (e.type.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        // console.log(e.props.value);
        if (e.props.value(value)) {
          cases.push(e);
          //   console.log(cases);
        }
      } else if (e.props.value === value) {
        cases.push(e);
        // console.log(cases);
      }
    } else if (e.type.name === "DefaultCase") {
      defaults.push(e);
      //   console.log(defaults);
    }
  });
  if (cases.length > 0) {
    return cases;
  } else {
    return defaults;
  }
};

const CustomCase = ({ children }) => {
  return <h1>{children}</h1>;
};

const DefaultCase = ({ children }) => {
  return <h1>{children}</h1>;
};

function SwitchCaseComponent() {
  return (
    <>
      <CustomSwitch value="41">
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

export default SwitchCaseComponent;
