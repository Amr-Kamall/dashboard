import React from "react";

function Spinner({ width }) {
  if (width === "small")
    return (
      <div style={{ width: "20px", height: "20px" }} className="loader"></div>
    );
  else return <div className="loader"></div>;
}

export default Spinner;
