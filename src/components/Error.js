import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3 style={{ color: "blue" }}>
        {err.status}: {err.statusText}
      </h3>
      <h4 style={{ color: "red" }}>{err.data}</h4>
    </div>
  );
};
