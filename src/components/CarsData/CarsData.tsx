import classNames from "classnames";
import { TableHeaderCell } from "components/TableHeaderCell/TableHeaderCell";
import React, { FunctionComponent, useState } from "react";
import { CarInfo } from "types/carInfo";
import "./CarsData.css";

export interface CarsDataProps {
  cars: CarInfo[];
  tariffs: string[];
  filter: string;
  sort(sortFunction: any): void;
  setFilter(filter: string): void;
}

export const CarsData: FunctionComponent<CarsDataProps> = ({
  cars,
  tariffs,
  filter,
  sort,
  setFilter,
}) => {
  const [selectedCar, setSelectedCar] = useState("");
  const [localFilter, setLocalFilter] = useState("");
  const [sortedColumn, setSortedColumn] = useState("");
  const [sortDirection, setSortDirection] = useState(false); // false - ascending, true - descending

  const sortFunction = (sortedColumnName: string) => {
    if (sortedColumnName === sortedColumn) {
      setSortDirection(!sortDirection);
    } else {
      setSortedColumn(sortedColumnName);
      setSortDirection(false);
    }
    sort((a: any, b: any) => {});
  };

  return (
    <div className="carsData">
      <section className="filterSection">
        <input
          className="searchInput"
          type="text"
          placeholder="Поиск"
          onChange={(e) => {
            setLocalFilter(e.target.value);
          }}
        />
        <button className="searchButton" onClick={() => setFilter(localFilter)}>
          Найти
        </button>
      </section>
      <section className="tableSection">
        <table className="table">
          <thead>
            <tr>
              <TableHeaderCell text="Марка и модель" sort={sort} />
              {tariffs.map((tariff, index) => (
                <TableHeaderCell key={index} text={tariff} sort={sort} />
              ))}
            </tr>
          </thead>
          <tbody>
            {cars
              .filter(
                (item) =>
                  item.mark.includes(filter) || item.model.includes(filter)
              )
              .map((car, index) => (
                <tr
                  key={index}
                  onClick={() => setSelectedCar(`${car.mark} ${car.model}`)}
                >
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
      {selectedCar && (
        <section className="selectionSection">{`Выбран автомобиль ${selectedCar}`}</section>
      )}
    </div>
  );
};
