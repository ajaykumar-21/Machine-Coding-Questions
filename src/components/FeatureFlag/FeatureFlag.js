import React, { useContext, useState } from "react";

const FeatureFlags = React.createContext({});

export const FeatureFlagProvider = ({ children }) => {
  console.log(children);
  const [features, setFeatures] = useState({
    isGooglePayEnabled: true,
    isPhonePayEnabled: false,
  });
  return (
    <FeatureFlags.Provider value={{ features }}>
      {children}
    </FeatureFlags.Provider>
  );
};

// const PaymentFlag = () => {
//   return (
//     <>
//       <Feature feature="isGooglePayEnabled" value={true}>
//         Google
//       </Feature>{" "}
//       <Feature feature="isPhonePayEnabled" value={true}>
//         Phone Pay
//       </Feature>
//     </>
//   );
// };
const Feature = () => {
  const { features } = React.useContext(FeatureFlags);
  // return features[feature] === value ? children : null;

    return (
      <>
        <h1>{features.isGooglePayEnabled ? "Google" : ""}</h1>
        <h1>{features.isPhonePayEnabled ? "Phone Pay" : ""}</h1>
      </>
    );
};

function FeatureFlag() {
  return (
    <FeatureFlagProvider>
      <Feature />
    </FeatureFlagProvider>
  );
}

export default FeatureFlag;
