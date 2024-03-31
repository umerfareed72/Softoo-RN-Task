import {AnyAction, createAsyncThunk} from '@reduxjs/toolkit';
import {getAllProducts} from '../../../services';
import * as Types from '../../types';

// get Products
export const getAllProductAction = createAsyncThunk(
  Types.GET_ALL_PRODUCTS,
  async ({onSuccess, onFailure}: AnyAction, {rejectWithValue}) => {
    try {
      const res = await getAllProducts();
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      // return custom error message from API if any
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// get Products
export const shopProductAction = createAsyncThunk(
  Types.SHOP_ALL_PRODUCTS,
  async (value: AnyAction, {rejectWithValue}) => {
    try {
      return value;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Add Product
export const addProductAction = createAsyncThunk(
  Types.ADD_PRODUCT,
  async (values: any, {rejectWithValue}) => {
    try {
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Delete Product
export const delProductAction = createAsyncThunk(
  Types.DEL_PRODUCT,
  async (values: any, {rejectWithValue}) => {
    try {
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// update Product
export const updateProductAction = createAsyncThunk(
  Types.UPDATE_PRODUCT,
  async (values: any, {rejectWithValue}) => {
    try {
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Remove Product
export const removeProductAction = createAsyncThunk(
  Types.REMOVE_PRODUCT,
  async (values: any, {rejectWithValue}) => {
    try {
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
