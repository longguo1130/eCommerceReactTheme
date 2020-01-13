import {createStore, combineReducers, applyMiddleware} from 'redux';
import sliderReducer from './sliderReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    slider: sliderReducer,
    post: postReducer,
})
const store = createStore(
    rootReducer,
);
export default store;