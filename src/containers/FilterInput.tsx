import { FilterInput } from "../components/FilterInput/FilterInput";
import React, { FunctionComponent } from "react";
import { useAppDispatch } from "store/hooks";
import { filterActions } from "store/slices/filter";

export const FilterInputContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <FilterInput
      setFilter={(filter: string) => dispatch(filterActions.setFilter(filter))}
    />
  );
};
