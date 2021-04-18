import React from "react";
import ScrollTop from "./HOC/utils/ScrollTop/ScrollTop";
import Layout from "./components/Layout/Layout";
import Home from './components/UsesPageScreen/UsesPageScreen'

const Router = () => {

  return (
    <BrowserRouter>
      <ScrollTop>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default Router;
