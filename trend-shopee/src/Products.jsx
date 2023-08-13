import React from "react";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";
import { useFilterContext } from "./context/filterContext";
import "./style/productPage.css";

const Products = () => {
  const {
    gridView,
    changeSortValue,
    allProducts,
    filterProducts,
    changeToGrid,
    changeToList,
    searchProduct,
  } = useFilterContext();

  return (
    <div className="products">
      {allProducts != [] ? (
        <div className="productSection section">
          <div className="flex">
            <div className="filterCon">
              <FilterSection />
            </div>
            <div className="con2">
              <div className="sortSection">
                <Sort
                  gridView={gridView}
                  changeToGrid={changeToGrid}
                  changeToList={changeToList}
                  filterProducts={filterProducts}
                  changeSortValue={changeSortValue}
                />
              </div>
              <div className="main flex">
                <ProductList allProducts={filterProducts} gridView={gridView} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading......</h1>
      )}
    </div>
  );
};

export default Products;
