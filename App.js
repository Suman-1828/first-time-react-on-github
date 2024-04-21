// const heading = React.createElement("h1", {id:"heading"}, "Programing with React"); //{} -> give attributes to the tags

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);

// root.render(heading);

/**
 * <div id="parent">
 * <div id="child">
 * <h1> Nested div</h1>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head" }, "Nested Tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head" }, "Nested Tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);

//this is like mesh-up for this we have JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
