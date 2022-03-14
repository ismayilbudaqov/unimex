import { combineReducers,createStore } from "redux";
import productsReducer from "./productsReducer";
import basketReducer from "./basketReducer";


const reducer = combineReducers({
    productsReducer,
    basketReducer
})



const configureStore = () =>{

return createStore(reducer)

}
export default configureStore