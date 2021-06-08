// import MyLayout from "./layout/MyLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ListByBrand from "./components/ListByBrand";
import Trending from "./components/Trending";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/popular">
          <Trending />
        </Route>
        <Route path="/mobiles/:brand" component={ListByBrand} />
        {/* <ListByBrand /> */}
        {/* </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
