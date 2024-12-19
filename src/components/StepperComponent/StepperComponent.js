import React, { useState } from "react";
import style from "./StepperComponent.module.css";

function StepperComponent({ data }) {
  const [currentStep, setCurrentStep] = useState(0);
  const stepCount = data.length;
  const steps = [];

  for (let i = 0; i < stepCount; i++) {
    steps.push(
      <div
        key={i}
        onClick={() => setCurrentStep(i)}
        className={`${style.step} ${currentStep >= i ? style.active : ""}`}
      >
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (data.length - 1)) * currentStep;

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== data.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <div className={style.stepperContainer}>
        <div className={`${style["Steps-wrapper"]}`}>{steps}</div>
        <div
          style={{ width: `${progressLineWidth}%` }}
          className={`${style["progess-line"]}`}
        ></div>
      </div>
      <div>{data[currentStep]}</div>
      <div>
        <button onClick={onPrev} disabled={currentStep === 0}>
          Prev
        </button>
        <button onClick={onNext} disabled={currentStep === data.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepperComponent;
