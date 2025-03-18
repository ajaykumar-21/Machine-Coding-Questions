import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const FeatureFlags = React.createContext({});

function FlagProvider({ children }) {
  const [features, setFeatures] = useState({
    isGooglePayEnabled: true,
    isePhonePayEnabled: false,
  });

  return (
    <>
      <FeatureFlags.Provider value={{ features }}>
        {children}
      </FeatureFlags.Provider>
    </>
  );
}

const PaymentFlag = () => {
  return (
    <>
      <Feature feature="isGooglePayEnabled">Google</Feature>
      <Feature feature="isePhonePayEnabled">Phone pe</Feature>
    </>
  );
};

const Feature = ({ feature, children }) => {
  console.log(children, feature);
  const { features } = React.useContext(FeatureFlags);
  return features[feature] === true ? children : null;
  // return (
  //   <>
  //     <h1>{features.isGooglePayEnabled ? "Google" : null}</h1>
  //     <h1>{features.isePhonePayEnabled ? "Phone Pe" : null}</h1>
  //   </>
  // );
};

const Practics = () => {
  return (
    <FlagProvider>
      <PaymentFlag />
    </FlagProvider>
  );
};

export default Practics;
