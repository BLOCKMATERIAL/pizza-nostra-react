import filtersPizzas from './filters'
import pizzasReducer from './pizzas'
import { combineReducers} from 'redux';


const rootReducer = combineReducers({
    filters: filtersPizzas,
    pizzas: pizzasReducer,
})


export default rootReducer;