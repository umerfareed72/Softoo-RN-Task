const BASE_URL: string =
  'https://my-json-server.typicode.com/benirvingplt/products';

interface Endpoints {
  GET_PRODUCTS: string;
}

const ENDPOINTS: Endpoints = {
  GET_PRODUCTS: '/products',
};

export {BASE_URL, ENDPOINTS};
