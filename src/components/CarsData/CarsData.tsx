import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { CarInfo } from "types/carInfo";
import "./CarsData.css";
import sortIcon from "../../icons/sort.svg";

export interface CarsDataProps {
  cars: CarInfo[];
  tariffs: string[];
  sort(sortFunction: any): void;
}

export const CarsData: FunctionComponent<CarsDataProps> = ({
  cars,
  tariffs,
  sort,
}) => {
  //
  return (
    <div className="carsData">
      <section className="filterSection">
        <input className="searchInput" type="text" placeholder="Поиск" />
        <button className="searchButton">Найти</button>
      </section>
      <section className="tableSection">
        <table className="table">
          <thead>
            <tr>
              <th className={classNames("tableHeaderCell", "tableCell")}>
                <div className="tableHeaderCellWithIcon">
                  {"Марка и модель"} <img src={sortIcon} alt="sort icon" />
                </div>
              </th>
              {tariffs.map((tariff, index) => (
                <th
                  className={classNames("tableHeaderCell", "tableCell")}
                  key={index}
                >
                  {tariff}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td
                  className={classNames("tableBodyCell", "tableCell")}
                >{`${car.mark} ${car.model}`}</td>
                {tariffs.map((tariff, index) => (
                  <td
                    className={classNames("tableBodyCell", "tableCell")}
                    key={index}
                  >
                    {car.tariffs[tariff]?.year ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="selectionSection"></section>
    </div>
  );
};
