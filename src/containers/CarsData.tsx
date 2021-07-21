import { getCars } from "api/getCars";
import { CarsData } from "components/CarsData/CarsData";
import React, { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { carsActions } from "store/slices";

export const CarsDataContainer: FunctionComponent = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCars().then((json) => {
      dispatch(carsActions.addTafiffs(json.tariffs_list));
      dispatch(carsActions.addCars(json.cars));
    });
  }, [dispatch]);

  return (
    <CarsData
      cars={state.cars.cars}
      tariffs={state.cars.tariffs}
      sort={(sortFunction: any) => dispatch(carsActions.sort(sortFunction))}
    />
  );
};
