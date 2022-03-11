
import { createStore } from "redux";
import rootReducer from "./reducers/index";

// const store=createStore(rootReducer,window.REDUX_DEVTOOLS_EXTENSION_&& Window.REDUX_DEVTOOLS_EXTENSION_());
const store=createStore(rootReducer);

export default store;