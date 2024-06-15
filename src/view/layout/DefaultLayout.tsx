import {ReactNode} from "react";

interface DefaultLayoutProps {
    children: ReactNode
}
export const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return(
      <div className={'w-full h-full'}>
          {children}
      </div>
  )
}