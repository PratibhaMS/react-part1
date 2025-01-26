// const body = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "main" }, "Main Heading of the website")
//   )
// );

const body = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, " Main Heading h1"),
    React.createElement("h2", {}, "Main Heading h1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Main Heading h2"),
    React.createElement("h2", {}, "Main Heading h2"),
  ])
);
console.log(body);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(body);
