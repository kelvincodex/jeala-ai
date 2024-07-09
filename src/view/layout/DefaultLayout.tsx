import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface DefaultLayoutProps {
    children: ReactNode
}
export const DefaultLayout = ({children}: DefaultLayoutProps) => {
    const themeState = useSelector((state: RootState)=> state.theme)
  return(
      <div className={`w-full h-full ${themeState.theme == "dark" && 'bg-dark-400'}`}>
          {children}
      </div>
  )
}