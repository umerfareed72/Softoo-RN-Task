import {combineReducers} from 'redux';
import productSlice from './product-reducers/productSlice';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  products: productSlice,
});

const rootReducer = (state: any, action: any) => {
  return root_reducer(state, action);
};

export default rootReducer;
