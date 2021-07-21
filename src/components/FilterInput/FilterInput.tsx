import React, { FunctionComponent, useState } from "react";
import "./FilterInput.css";

export interface FilterInputProps {
  setFilter(filter: string): void;
}

export const FilterInput: FunctionComponent<FilterInputProps> = ({
  setFilter,
}) => {
  const [localFilter, setLocalFilter] = useState("");

  return (
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
  );
};
