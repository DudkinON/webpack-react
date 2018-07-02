import React from "react";
import ReactDom from "react-dom";
import Main from "./main";
import { AppContainer } from "react-hot-loader";

function render(Component) {
  ReactDom.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('react-app')
  );
}

render(Main);

if (module.hot) {
  module.hot.accept("./main", () => {
    const MainComponent = require("./main").default;
    render(MainComponent)
  })
}