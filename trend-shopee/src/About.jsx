import React from "react";
import InfoWithImg from "./components/InfoWithImg";
import Features from "./components/features";
import Company from "./components/company";
import FeatureProducts from "./components/FeatureProducts";

const About = () => {
  return (
    <>
      <InfoWithImg />
      <Features />
      <FeatureProducts />
      <Company />
    </>
  );
};

export default About;
