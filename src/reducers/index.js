import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReduer from "./backlogReduer";
import securityReducer from './securityReducer'

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backlogReduer,
  security: securityReducer
});
