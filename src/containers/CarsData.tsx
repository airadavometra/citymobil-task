import { getCars } from "api/getCars";
import { CarsData } from "components/CarsData/CarsData";
import React, { FunctionComponent, useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { carsActions } from "store/slices";

export const CarsDataContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCars().then((json) => {
      dispatch(carsActions.addTafiffs(json.tariffs_list));
      dispatch(carsActions.addCars(json.convertedCars));
    });
  }, [dispatch]);

  return <CarsData />;
};
