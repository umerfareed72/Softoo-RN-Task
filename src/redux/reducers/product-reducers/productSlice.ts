import {createSlice} from '@reduxjs/toolkit';
import {
  addProductAction,
  delProductAction,
  getAllProductAction,
  removeProductAction,
  shopProductAction,
  updateProductAction,
} from '../../actions';

// initialize userToken from local storage

const initialState = {
  products: [],
  shopped_products: [],
  product_detail: null,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(getAllProductAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(getAllProductAction.fulfilled, (state: any, {payload}) => {
      state.products = payload;
    });

    builder.addCase(getAllProductAction.rejected, (state, {payload}) => {
      state.products = [];
    });

    builder.addCase(shopProductAction.fulfilled, (state: any, {payload}) => {
      state?.shopped_products?.push(payload?.item);
      state.products[payload?.index]['purchased'] = true;
      state.products = state.products;
      state.shopped_products = state.shopped_products;
    });

    builder.addCase(addProductAction.fulfilled, (state: any, {payload}) => {
      state.shopped_products[payload.index].quantity =
        state.shopped_products[payload.index]?.quantity + 1;
      state.shopped_products = state.shopped_products;
    });

    // Rmvove Category
    builder.addCase(removeProductAction.fulfilled, (state: any, {payload}) => {
      state.shopped_products[payload.index].quantity =
        state.shopped_products[payload.index]?.quantity - 1;
      state.shopped_products = state.shopped_products;
    });

    // Delete Product
    builder.addCase(delProductAction.fulfilled, (state: any, {payload}) => {
      state?.shopped_products?.splice(payload?.index, 1);
      state.products[payload?.item?.product_index]['purchased'] = false;
      state.shopped_products = state.shopped_products;
    });

    // update  Category
    builder.addCase(
      updateProductAction.fulfilled,
      (state: any, {payload}) => {},
    );
  },
});
export default productSlice.reducer;
