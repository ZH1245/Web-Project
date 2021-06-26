import { createStore } from "redux";
import reducers from "./reducer/index";

var store = createStore(reducers);
export default store;
