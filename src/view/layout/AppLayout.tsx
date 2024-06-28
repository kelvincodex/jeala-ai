import {Router} from "@/router";
import  "@/assets/style/index.scss"
import {useEffect} from "react";

export const AppLayout = () => {


  useEffect(() => {
    const preloader = document.querySelector('.preloader')
    preloader?.classList.replace('display-none', 'display')
    setTimeout(()=>{
      preloader?.classList.replace('display', 'display-none')
    }, 1200);
  }, []);

  return(
      <Router />
  )
}