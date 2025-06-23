// not curly braces - import the entiry library as one top-level object
// or import the default library the author has defined as export
// (default export)
import React from "react";
// called name import - go to the ReactDom library and only get the
// createRoot function
// (named export)
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs, wtf Italy",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham, wtf America",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza?",
      description: "chicken nuggies on your pizza, wtf UK",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "unholy potato mash, wtf Missanota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
