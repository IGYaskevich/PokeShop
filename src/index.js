import React from "react";
import ReactDOM from "react-dom";

import { MainLayout } from "./components/MainLayout";
import { Router } from "./routes/Routes";
import { persistStore } from "redux-persist";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store/configureStore";

import "./index.css";

export const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Router />
          </MainLayout>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
