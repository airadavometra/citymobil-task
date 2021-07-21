import { TableHeaderCell } from "components/TableHeaderCell/TableHeaderCell";
import React, { FunctionComponent } from "react";
import "./TableHeader.css";

export interface TableHeaderProps {
  tariffs: string[];
  sortKey: string;
  sortIsAscending: boolean;
  setFilter(filter: string): void;
  onTableHeadClick(key: string): void;
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
  tariffs,
  sortKey,
  sortIsAscending,
  onTableHeadClick,
}) => {
  return (
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
  );
};
