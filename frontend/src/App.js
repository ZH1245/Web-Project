import React from "react";
import HomePage from "./pages/HomePage";
import "antd/dist/antd.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Brands from "./pages/Brands";
import NewMobile from "./pages/NewMobile";
import LogIn from "./pages/LogIn";
import Mobile from "./pages/Mobile";
import SignupPage from "./pages/SignupPage";
import PopularityTable from "./pages/PopularityTable";
import PrivateRouteUser from "./components/PrivateRoute";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import { UserProvider } from "./context/UserContext";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/brands/:id" component={Brands} />
        <Route path="/mobile/:id" component={Mobile} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignupPage} />
        <PrivateRouteAdmin path="/addMobile" component={NewMobile} />
        <Route path="/search/:name" component={SearchPage} />
        <Route path="/popularity">
          <PopularityTable />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
