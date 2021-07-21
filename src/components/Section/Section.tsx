import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./Section.css";

export interface SectionProps {
  text: string;
  className?: string;
}

export const Section: FunctionComponent<SectionProps> = ({
  text,
  className,
}) => {
  return (
    <div className={classNames(className, "sectionContainer")}>
      <h1 className={classNames("section")}>{text}</h1>
    </div>
  );
};
