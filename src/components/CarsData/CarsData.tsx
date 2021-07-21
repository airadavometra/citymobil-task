import { FilterInputContainer } from "containers/FilterInput";
import { TableContainer } from "containers/Table";
import React, { FunctionComponent } from "react";
import "./CarsData.css";

export const CarsData: FunctionComponent = () => {
  return (
    <div className="carsData">
      <FilterInputContainer />
      <TableContainer />
    </div>
  );
};
