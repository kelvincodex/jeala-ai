import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppLayout} from "@/view/layout/AppLayout.tsx";
import {persistor, store} from "@/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <AppLayout />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
)
