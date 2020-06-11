import React from "react";
import {Switch, Route} from "react-router-dom";
import Form from "./form";
import ViewCampaign from "./viewCampaigns";
import ViewRecipients from "./viewRecipients";

const Main = () =>(
 <Switch>
     <Route path="/" exact={true} component={Form} />
     <Route path="/campaigns" component={ViewCampaign} />
     <Route path="/recipients" component={ViewRecipients} />
 </Switch>
)

export default Main;