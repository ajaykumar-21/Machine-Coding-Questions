import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const List = ({ data }) => {
  console.log(data);
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className={style.stepperContainer}>
      <h1>Stepper components</h1>
      <div className={style.stepperWrapper}>
        {data &&
          data.map((e, i) => <div className={style.circle}>{i + 1}</div>)}
      </div>
      <div className={style.stepComponent}>{data[currentStep]}</div>
    </div>
  );
};

const Example1 = () => {
  return <>Hello, 1</>;
};

const Example2 = () => {
  return <>Hello, 2</>;
};

const Example3 = () => {
  return <>Hello, 3</>;
};

const Practics = () => {
  const data = [<Example1 />, <Example2 />, <Example3 />];
  return <List data={data} />;
};

export default Practics;
