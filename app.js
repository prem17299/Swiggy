import React from "react";
import ReactDOM from "react-dom/client";

const titleElement = <span> Jsx is here by prem </span>;

const Title = () => (
  <h1 tabIndex="5" className="head">
    {titleElement}
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2 className="heading">Comening from header functional component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
