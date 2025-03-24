import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const List = ({ data }) => {
  console.log(data);
  const [currentStep, setCurrentStep] = useState(2);

  const progressLineWidth = (100 / (data.length - 1)) * currentStep;

  const handlePrev = () => {
    setCurrentStep(currentStep !== 0 ? currentStep - 1 : "");
  };

  const handleNext = () => {
    setCurrentStep(currentStep !== data.length - 1 ? currentStep + 1 : "");
  };

  return (
    <div className={style.stepperContainer}>
      <h1>Stepper components</h1>
      <div className={style.stepperWrapper}>
        <div className={style.circleWrapper}>
          {data &&
            data.map((e, i) => <div className={style.circle}>{i + 1}</div>)}
        </div>
        <div
          className={style.progressLine}
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>
      <div className={style.stepComponent}>{data[currentStep]}</div>
      <div className={style.btnWrapper}>
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentStep === data.length - 1}>
          Next
        </button>
      </div>
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
