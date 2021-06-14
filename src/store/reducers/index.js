import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import formPage  from "./form-page";

const rootReducer = combineReducers({
    formPage,
    form:formReducer
});
export default rootReducer;
