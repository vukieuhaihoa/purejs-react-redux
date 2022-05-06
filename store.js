import { createStore } from "./core.js";
import carReducer from "./reducer.js";

const {attach, dispatch, connect} = createStore(carReducer);
window.dispatch = dispatch;
export {attach, connect}