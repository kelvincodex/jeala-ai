import  { useEffect} from "react";
import {AppRouter} from "@/router";
import  "@/assets/style/index.scss"
import {ToastContainer} from "react-toastify";
import {Modal} from "@/component/modal";

export const AppLayout = () => {
  useEffect(() => {
    const preloader = document.querySelector('.preloader')
    preloader?.classList.replace('display-none', 'display')

    setTimeout(()=>{
      preloader?.classList.replace('display', 'display-none')
    }, 100);
  }, []);




  return (
      <>
        <AppRouter />
          <Modal />
        <ToastContainer />
      </>
  )
}