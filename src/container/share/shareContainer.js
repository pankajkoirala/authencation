import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginContainer from "../../container/authentcation/login/loginContaianer";
import ProfileEditContainer from "../../container/profile/profileEditContainer";
import DashboardContainer from "../../container/dashboard/dashboardContainer";
import HomepageContainer from "../../container/homepage/homepageContainer";
import ProfileDisplayContainer from "../../container/profile/profileDisplayContainer"
import RegistrationContainer from "../../container/authentcation/registration/RegistrationContainer"
import Navbar from "../share/navBar/navBar";

const ShareContainer = () => {
  return (
    <div>
       <Navbar/>
    <Switch>

    <Route exact path="/">  <RegistrationContainer /></Route>
    <Route exact path="/home" > <HomepageContainer /></Route>
    <Route exact path="/profile">  <ProfileDisplayContainer /></Route>
    <Route exact path="/dashboard" ><DashboardContainer /></Route>
      <Route exact path="/login"><LoginContainer /> </Route>   
      <Route exact path="/signup" ><ProfileEditContainer /></Route>
      </Switch>
    </div>
  );
};
export default ShareContainer;
