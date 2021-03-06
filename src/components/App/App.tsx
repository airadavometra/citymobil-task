import { Section } from "../Section/Section";
import React, { FunctionComponent } from "react";
import "./App.css";
import { CarsDataContainer } from "../../containers/CarsData";

export const App: FunctionComponent = () => {
  return (
    <div className="main">
      <Section text="Header" className="header" />
      <Section text="Sidebar" className="sidebar" />
      <Section text="Footer" className="footer" />
      <CarsDataContainer />
    </div>
  );
};
