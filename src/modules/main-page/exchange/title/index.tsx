import * as React from "react";
import { Link } from "react-router-dom";
import { Props } from "./types";
import { BackButton } from "../../../ui-kit";
import "./styles.scss";

export const Title = ({ handleClick, text, title }: Props) => {
  return (
    <div className="title-block container">
      <Link to="/">
        <BackButton handleClick={handleClick} text={text} />
      </Link>
      <div className="title">{title}</div>
    </div>
  );
};
