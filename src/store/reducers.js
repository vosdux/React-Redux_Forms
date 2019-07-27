import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { registrationReducer } from "./registration/reducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer
});