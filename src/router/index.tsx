import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "@/router/routes";
import {DashboardLayout} from "@/view/layout/DashboardLayout.tsx";


export const AppRouter = () => {
  return(
      <BrowserRouter >
          <Routes>
              {
                  routes.map((value, index)=>{
                      const options = value.options
                      return (
                          <Route key={index}  path={value.path} element={options.hasSidebar ? <DashboardLayout children={
                              <value.component></value.component>}/> : <value.component></value.component>}  {...value.options} />
                      )
                  })
              }
          </Routes>
      </BrowserRouter>
  )
}