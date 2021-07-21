import classNames from "classnames";
import { TableHeaderCell } from "components/TableHeaderCell/TableHeaderCell";
import React, { FunctionComponent, useState } from "react";
import { Car } from "types/car";
import "./CarsData.css";

export interface CarsDataProps {
  cars: Car[];
  tariffs: string[];
  filter: string;
  sortKey: string;
  sortIsAscending: boolean;
  setFilter(filter: string): void;
  onTableHeadClick(key: string): void;
}

export const CarsData: FunctionComponent<CarsDataProps> = ({
  cars,
  tariffs,
  filter,
  sortKey,
  sortIsAscending,
  setFilter,
  onTableHeadClick,
}) => {
  const [selectedCar, setSelectedCar] = useState("");
  const [localFilter, setLocalFilter] = useState("");

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
          <thead className="tableHead">
            <tr>
              <TableHeaderCell
                text="Марка и модель"
                sortKey="name"
                onCellClick={onTableHeadClick}
                isAscending={sortIsAscending}
                isSorted={sortKey === "name"}
              />
              {tariffs.map((tariff, index) => (
                <TableHeaderCell
                  key={index}
                  text={tariff}
                  sortKey={tariff}
                  onCellClick={onTableHeadClick}
                  isAscending={sortIsAscending}
                  isSorted={sortKey === tariff}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {cars
              .filter((item) => String(item.name).includes(filter))
              .sort((a, b) => {
                if (sortIsAscending) {
                  //@ts-ignore
                  return a[sortKey] <= b[sortKey] ? -1 : 1;
                } else {
                  //@ts-ignore
                  return a[sortKey] >= b[sortKey] ? -1 : 1;
                }
              })
              .map((car, index) => (
                <tr
                  key={index}
                  onClick={() => setSelectedCar(car.name as string)}
                >
                  {Object.keys(car).map((key, index) => (
                    <td
                      key={index}
                      className={classNames("tableBodyCell", "tableCell")}
                    >
                      {car[key] ?? "-"}
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
