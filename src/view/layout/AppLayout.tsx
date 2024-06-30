import  { useEffect} from "react";
import {Provider} from "react-redux";
import {persistor, store} from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import {Router} from "@/router";

import  "@/assets/style/index.scss"

export const AppLayout = () => {

  useEffect(() => {
    const preloader = document.querySelector('.preloader')
    preloader?.classList.replace('display-none', 'display')
    setTimeout(()=>{
      preloader?.classList.replace('display', 'display-none')
    }, 100);
  }, []);


  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
      </Provider>
  )
}