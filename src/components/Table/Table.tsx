import classNames from "classnames";
import { TableHeaderContainer } from "containers/TableHeader";
import React, { FunctionComponent, useState } from "react";
import { Car } from "types/car";
import "./Table.css";

export interface TableProps {
  cars: Car[];
  filter: string;
  sortKey: string;
  sortIsAscending: boolean;
}

export const Table: FunctionComponent<TableProps> = ({
  cars,
  filter,
  sortKey,
  sortIsAscending,
}) => {
  const [selectedCar, setSelectedCar] = useState("");
  return (
    <>
      <section className="tableSection">
        <table className="table">
          <TableHeaderContainer />
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
    </>
  );
};
