import { TableHeader } from "../components/TableHeader/TableHeader";
import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { sortActions } from "store/slices";
import { filterActions } from "store/slices/filter";

export const TableHeaderContainer: FunctionComponent = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <TableHeader
      tariffs={state.cars.tariffs}
      sortKey={state.sortParameters.key}
      sortIsAscending={state.sortParameters.isAscending}
      setFilter={(filter: string) => dispatch(filterActions.setFilter(filter))}
      onTableHeadClick={(key: string) => {
        if (state.sortParameters.key === key) {
          dispatch(sortActions.toggleDirection());
        } else {
          dispatch(sortActions.setKey(key));
        }
      }}
    />
  );
};
