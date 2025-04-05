import React from "react";
import Header from "../Header/Header";

export default function PageWrapper(props) {
  return (
    <React.Fragment>
      <Header selectedOption={props.selectedOption} handler={props.handler} />
      {props.children}
    </React.Fragment>
  );
}
