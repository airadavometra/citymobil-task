import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./TableHeaderCell.css";
import sortIcon from "../../icons/sort.svg";

export interface TableHeaderCellProps {
  text: string;
  sortKey: string;
  isSorted: boolean;
  isAscending: boolean;
  onCellClick(sortFunction: any): void;
}

export const TableHeaderCell: FunctionComponent<TableHeaderCellProps> = ({
  text,
  sortKey,
  isSorted,
  isAscending,
  onCellClick,
}) => {
  return (
    <th className={classNames("tableHeaderCell", "tableCell")}>
      <button
        className="tableHeaderCellWithIcon"
        onClick={() => onCellClick(sortKey)}
      >
        {text}{" "}
        {isSorted && (
          <img
            className={classNames({ flipped: isAscending })}
            src={sortIcon}
            alt="sort icon"
          />
        )}
      </button>
    </th>
  );
};
