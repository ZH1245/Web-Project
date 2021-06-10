// import MyLayout from "./layout/MyLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ListByBrand from "./components/ListByBrand";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Trending from "./components/Trending";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/popular">
          <Trending />
        </Route>
        <Route path="/mobiles/:brand" component={ListByBrand} />
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <ListByBrand /> */}
        {/* </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
