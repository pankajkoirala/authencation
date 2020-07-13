import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginContainer from "../../container/authentcation/login/loginContaianer";
import DashboardContainer from "../../container/dashboard/dashboardContainer";
import HomepageContainer from "../../container/homepage/homepageContainer";
import ProfileDisplayContainer from "../../container/profile/profileDisplayContainer";
import RegistrationContainer from "../../container/authentcation/registration/RegistrationContainer";
import PrivateRoute from "../route/privateRoute";

const ShareContainer = () => {
  return (
    <div>
 
      <Switch>
        <Route exact path="/signup">
          <RegistrationContainer />
        </Route>
        <Route exact path="/">
          <HomepageContainer />
        </Route>

        <Route exact path="/login">
          <LoginContainer />
        </Route>
        <PrivateRoute
          component={ProfileDisplayContainer}
          exact
          path="/profile"
        />
        <PrivateRoute component={DashboardContainer} exact path="/dashboard" />
      </Switch>
    </div>
  );
};
export default ShareContainer;
