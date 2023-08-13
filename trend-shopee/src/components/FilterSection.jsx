import React from "react";
import { useFilterContext } from "../context/filterContext";
import FormatPrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const { searchProduct, filters, allProducts, clear } = useFilterContext();
  const { text } = filters;

  // TO GET UNIQUE DATA OF EACH FIELD
  const getUniqueData = (data, prop) => {
    let newVal = data.map((item) => {
      return item[prop];
    });

    // to get unique data
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(allProducts, "category");
  const companyOnlyData = getUniqueData(allProducts, "company");

  return (
    <div className="filterSection">
      <div className="search">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            className="searchInput"
            placeholder="Search"
            value={text}
            onChange={searchProduct}
          />
        </form>
      </div>
      <div className="category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((name, i) => {
            return (
              <div>
                <button
                  key={i}
                  name="category"
                  className="categoryButton"
                  value={name}
                  onClick={searchProduct}
                >
                  {name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="company">
        <h3>Company</h3>
        <select name="company" onClick={searchProduct} id="company">
          {companyOnlyData.map((name, i) => {
            return (
              <option key={i} name="company" value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="clear">
        <button onClick={clear} className="btn">
          {" "}
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
