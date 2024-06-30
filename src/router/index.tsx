import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "@/router/routes";

export const Router = () => {
  return(
      <BrowserRouter>
          <Routes>
              {
                  routes.map((value, index)=>{
                      return (
                          <Route key={index}  path={value.path} element={<value.component></value.component>}  {...value.options} />
                      )
                  })
              }
          </Routes>
      </BrowserRouter>
  )
}