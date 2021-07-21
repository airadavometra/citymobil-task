import { Table } from "../components/Table/Table";
import React, { FunctionComponent } from "react";
import { useAppSelector } from "store/hooks";

export const TableContainer: FunctionComponent = () => {
  const state = useAppSelector((state) => state);

  return (
    <Table
      cars={state.cars.cars}
      filter={state.filter.filter}
      sortKey={state.sortParameters.key}
      sortIsAscending={state.sortParameters.isAscending}
    />
  );
};
