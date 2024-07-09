import  { useEffect} from "react";
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
      <Router />
  )
}