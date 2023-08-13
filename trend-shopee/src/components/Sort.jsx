import React from "react";
import { BsList, BsGridFill } from "react-icons/bs";
import { MdSort } from "react-icons/md";

const Sort = ({
  gridView,
  changeSortValue,
  changeToGrid,
  changeToList,
  filterProducts,
}) => {
  return (
    <div className="sort flex">
      <div className="viewToggle flex">
        <BsGridFill
          onClick={() => {
            changeToGrid();
          }}
          className={gridView ? "viewIcon viewActive" : "viewIcon"}
        />
        <BsList
          onClick={() => {
            changeToList();
          }}
          className={gridView ? "viewIcon" : "viewIcon viewActive"}
        />
      </div>
      <div className="products flex">
        <p>{filterProducts.length} products Available</p>
      </div>
      <div className="sortInput flex">
        <label htmlFor="sortInput">
          <MdSort className="icon" />
        </label>
        <select
          onClick={() => changeSortValue()}
          name="sortInput"
          id="sortInput"
        >
          <option value="default"></option>
          <option value="lowest">lowest</option>
          <option value="highest">highest</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
