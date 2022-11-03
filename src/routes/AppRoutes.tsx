import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "components/atoms/ErrorPage";
import { IAppRouteProps } from "types/routes.types";
import Header from "components/atoms/Header";
import Footer from "components/atoms/Footer";
import 'assets/styles/app-routes.scss'
const AppRoutes: FC<IAppRouteProps> = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        {props.routeConfig.map((ele, index) => (
          <Route 
            path={ele.path}
            element={(
              <React.Fragment>
                <Header />
                <div className="container">
                  <ele.component />
                </div>
                <Footer/>
              </React.Fragment>
            )}
            key={index}
          />
        ))}
        <Route
          path="*"
          element={<ErrorPage title="404" message="Page Not found" />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes