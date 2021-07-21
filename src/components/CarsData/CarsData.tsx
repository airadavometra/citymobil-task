import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./CarsData.css";

export interface CarsDataProps {
  className?: string;
}

export const CarsData: FunctionComponent<CarsDataProps> = ({ className }) => {
  return (
    <div className={classNames(className, "carsData")}>
      <section className="filterSection">
        <input className="searchInput" type="text" placeholder="Поиск" />
        <button className="searchButton">Найти</button>
      </section>
      <section className="tableSection"></section>
      <section className="selectionSection"></section>
    </div>
  );
};
