import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Home from "./home/Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
