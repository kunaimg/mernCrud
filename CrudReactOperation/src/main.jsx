import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import Store from "./ReduxToolkit/Store.jsx";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistMainStore = persistStore(Store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    {" "}
    <PersistGate persistor={persistMainStore}>
      {" "}
      <App />
    </PersistGate>
  </Provider>
);
