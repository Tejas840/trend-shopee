import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: true,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  //fetch All DATA
  const getData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let res = await axios.get(url);
      let data = await res.data;
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "API_LOADING" });
    }
  };

  //get Single Product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      let res = await axios.get(url);
      let singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to avoid lengthy importing of context hook;
const useProductsContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContext };
