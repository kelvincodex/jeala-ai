import {Router} from "@/router";
import  "@/assets/style/index.scss"
import { useEffect} from "react";
import { Provider } from "react-redux";
import {persistor, store} from "@/store";
import {PersistGate} from "redux-persist/integration/react";
import { MotionConfig } from "framer-motion";



export const AppLayout = () => {


  useEffect(() => {
    const preloader = document.querySelector('.preloader')
    preloader?.classList.replace('display-none', 'display')
    setTimeout(()=>{
      preloader?.classList.replace('display', 'display-none')
    }, 500);
  }, []);

  return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MotionConfig transition={{ duration: 1500 }}>
            <Router />
            </MotionConfig>
        </PersistGate>
      </Provider>
  )
}