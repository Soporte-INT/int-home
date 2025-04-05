import React from "react";
import HeaderToIndex from "../Header/HeaderToIndex";

export default function PageWrapperToIndex(props) {
  return (
    <React.Fragment>
      <HeaderToIndex
        selectedOption={props.selectedOption}
        handler={props.handler}
      />
      {props.children}
    </React.Fragment>
  );
}
