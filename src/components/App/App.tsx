import { Section } from "../Section/Section";
import React, { FunctionComponent } from "react";
import "./App.css";
import { CarsData } from "components/CarsData/CarsData";

export const App: FunctionComponent = () => {
  return (
    <div className="main">
      <Section text="Header" className="header" />
      <Section text="Sidebar" className="sidebar" />
      <Section text="Footer" className="footer" />
      <CarsData className="table" />
    </div>
  );
};
