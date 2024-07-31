import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {routes, RouteType} from "@/router/routes";
import {DashboardLayout} from "@/view/layout/DashboardLayout.tsx";
import {RootState} from "@/store";
import {useSelector} from "react-redux";


export const AppRouter = () => {
    const authState = useSelector((state: RootState)=> state.auth)
    const isAuthenticated = authState?.token !== null;

    const authRoutes =  routes.filter((route: RouteType) => (route.options.isAuthenticated) )
    const guessRoutes =  routes.filter((route: RouteType) => (!route.options.isAuthenticated) )

  return(
      <BrowserRouter >
          <Routes>
              {/*{*/}
              {/*    routes.map((value, index)=>{*/}
              {/*        const options = value.options*/}
              {/*        return (*/}
              {/*            <Route key={index}  path={value.path} element={options.hasSidebar ? <DashboardLayout children={*/}
              {/*                <value.component></value.component>}/> : <value.component></value.component>}  {...value.options} />*/}
              {/*        )*/}
              {/*    })*/}
              {/*}*/}

              {
                  guessRoutes.map((value, index) => {
                      const options = value.options
                      const element =  (options.hasSidebar ? <DashboardLayout children={
                          <value.component></value.component>}/> : <value.component></value.component>)

                      return (
                          <Route key={index}  path={value.path} element={element}  {...value.options} />
                      )
                  })
              }
              {
                  authRoutes.map((value:RouteType, index)=>{
                      const options = value.options
                      const element =  (options.hasSidebar ? <DashboardLayout children={
                          <value.component></value.component>}/> : <value.component></value.component>)
                      return (
                          isAuthenticated ?
                              <Route key={index}  path={value.path} element={element}  {...value.options} /> :
                              <Route key={index}  path={value.path} element={<Navigate to={'/login'} replace />}   />
                      )
                  })
              }
          </Routes>
      </BrowserRouter>
  )
}