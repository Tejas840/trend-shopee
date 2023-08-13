export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "CHANGE_PRODUCTS_VIEW_GRID":
      return {
        ...state,
        gridView: true,
      };

    case "CHANGE_PRODUCTS_VIEW_LIST":
      return {
        ...state,
        gridView: false,
      };
    case "SORT_DATA":
      let valueInput = state.sortValue;
      let filterData = state.filterProducts;

      switch (valueInput) {
        case "default":
          return {
            ...state,
            filterProducts: state.filterProducts,
          };
        case "lowest":
          let newData = filterData.sort((a, b) => {
            return a.price - b.price;
          });
          return {
            ...state,
            filterProducts: newData,
          };
        case "highest":
          let newhigh = filterData.sort((a, b) => {
            return b.price - a.price;
          });
          return {
            ...state,
            filterProducts: newhigh,
          };
        case "a-z":
          let alpha = filterData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          return {
            ...state,
            filterProducts: alpha,
          };
        case "z-a":
          let revAlph = filterData.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          return {
            ...state,
            filterProducts: revAlph,
          };

        default:
          return state;
      }
    case "CHANGE_SORT_VALUE":
      let val = document.getElementById("sortInput");
      let sortVal = val.options[val.selectedIndex].value;

      return {
        ...state,
        sortValue: sortVal,
      };

    case "ADD_SEARCH_TEXT":
      let [name, value] = action.payload;

      return {
        ...state,
        filters: {
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let tempData = state.allProducts;
      const { text, category, company, price } = state.filters;

      // if (price) {
      //   tempData = tempData.filter((item) => item.pri <= price);
      // }

      if (text) {
        tempData = tempData.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }

      if (category) {
        if (category == "All") {
          return {
            ...state,
            filterProducts: tempData,
          };
        }
        tempData = tempData.filter((item) => {
          return item.category.toLowerCase().includes(category);
        });
      }

      if (company && company != "All") {
        tempData = tempData.filter((item) => {
          return item.company.toLowerCase().includes(company);
        });
      }
      return {
        ...state,
        filterProducts: tempData,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          text: "",
          category: "",
          company: "",
        },
      };
    default:
      return state;
  }
}
