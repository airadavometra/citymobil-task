import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./CarsData.css";

export interface CarsDataProps {
  text: string;
  className?: string;
}

export const CarsData: FunctionComponent<CarsDataProps> = ({
  text,
  className,
}) => {
  return <h1 className={classNames(className, "header")}>{text}</h1>;
};
