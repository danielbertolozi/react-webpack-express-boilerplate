import React from "react";
import "./Styles.css";

export interface IButton {
  id?: string;
  onClick: () => void;
  title: string;
}

export function Button({ onClick, title, id }: IButton): JSX.Element {
  return (
    <span id={id} className={"button"} onClick={onClick}>
      {title}
    </span>
  );
}
