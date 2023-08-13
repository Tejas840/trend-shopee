import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./productContext";
import reducer from "../reducer/filterReducer";

//
const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortValue: "default",
  filters: {
    text: "",
    category: "",
    company: "",
  },
};
//
///function
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_DATA" });
  }, [products, state.filters, state.sortValue]);

  //change Grid view function
  const changeToGrid = () => {
    dispatch({ type: "CHANGE_PRODUCTS_VIEW_GRID" });
  };
  const changeToList = () => {
    dispatch({ type: "CHANGE_PRODUCTS_VIEW_LIST" });
  };

  //sort product function
  const changeSortValue = () => {
    dispatch({ type: "CHANGE_SORT_VALUE" });
  };
  //search
  const searchProduct = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "ADD_SEARCH_TEXT", payload: [name, value] });
  };
  // clear filter
  const clear = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        searchProduct,
        changeSortValue,
        changeToGrid,
        changeToList,
        clear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// to simplify the access we add custom hook(not needed)
export const useFilterContext = () => {
  return useContext(FilterContext);
};
