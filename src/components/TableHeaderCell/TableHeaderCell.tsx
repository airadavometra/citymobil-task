import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";
import "./TableHeaderCell.css";
import sortIcon from "../../icons/sort.svg";

export interface TableHeaderCellProps {
  text: string;
  sort(sortFunction: any): void;
}

export const TableHeaderCell: FunctionComponent<TableHeaderCellProps> = ({
  text,
  sort,
}) => {
  return (
    <th className={classNames("tableHeaderCell", "tableCell")}>
      <button
        className="tableHeaderCellWithIcon"
        onClick={() => sort(() => {})}
      >
        {text} <img src={sortIcon} alt="sort icon" />
      </button>
    </th>
  );
};
