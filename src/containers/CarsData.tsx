import { getCars } from "api/getCars";
import { CarsData } from "components/CarsData/CarsData";
import React, { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { carsActions } from "store/slices";
import { filterActions } from "store/slices/filter";
import { sortActions } from "store/slices/sortParameters";

export const CarsDataContainer: FunctionComponent = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCars().then((json) => {
      dispatch(carsActions.addTafiffs(json.tariffs_list));
      dispatch(carsActions.addCars(json.convertedCars));
      dispatch(sortActions.setKey("name"));
    });
  }, [dispatch]);

  return (
    <CarsData
      cars={state.cars.cars}
      tariffs={state.cars.tariffs}
      filter={state.filter.filter}
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
