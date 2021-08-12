import React from "react";
import { props } from "bluebird";

export const Heading = (props) => {
  const { className, children } = props;

  return <h2 className={className}>{children}</h2>;
};
