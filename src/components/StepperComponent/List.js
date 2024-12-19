import React from "react";
import StepperComponent from "./StepperComponent";

function List() {
  let data = [<Example1 />, <Example2 />, <Example3 />];
  return (
    <>
      <StepperComponent data={data} />
    </>
  );
}

export default List;

const Example1 = () => {
  return (
    <>
      <h1>Hello, 1</h1>
    </>
  );
};

const Example2 = () => {
  return (
    <>
      <h1>Hello, 2</h1>
    </>
  );
};

const Example3 = () => {
  return (
    <>
      <h1>Hello, 3</h1>
    </>
  );
};
