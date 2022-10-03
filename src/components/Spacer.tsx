import React from "react";

type Props = { height: number; width?: never } | { height?: never; width: number };

const Spacer: React.FC<Props> = ({ height, width }) => {
  return <div style={{ height, width }}></div>;
};

export default Spacer;
