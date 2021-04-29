import React from "react";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Layout from "./components/Layout/Layout";
import Home from "./components/UsesPageScreen/UsesPageScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ErrorPage from './components/errorpage/errorpage'

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default Router;
