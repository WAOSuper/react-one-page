import React from "react";
import Menu from "./Menu";

export default function Filter({
    productFilter,
    stateFilter,
    cityFilter,
    brands,
    states,
    citys,
    productFilterVal,
    stateFilterVal,
    cityFilterVal,
    setProductFilter,
    setStateFilter,
    setCityFilter,
    setProductFilterVal,
    setStateFilterVal,
    setCityFilterVal
}) {
    return (
        <div className="w-full rounded-lg p-4" style={{backgroundColor: "#131313"}}>
            <div className="text-xl text-gray-400 mb-5 pb-3" style={{borderBottom:'1px solid #666'}}>
              Filters
            </div>
            <div className="mb-3 relative">
              <button 
                id="productFilter"
                style={{backgroundColor: "#232323"}}
                className="w-full relative text-white text-lg focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" 
                type="button" 
                data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(!productFilter)
                  setStateFilter(false)
                  setCityFilter(false)
                }}
              >
                {
                  productFilterVal === "" ? "Product" : productFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <Menu
                show={productFilter}
                data={brands}
                setItem={setProductFilterVal}
                setShow={setProductFilter}
              />
            </div>
            <div className="mb-3 relative">
              <button 
                id="stateFilter"
                style={{backgroundColor: "#232323"}}
                className="w-full relative text-white text-lg focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(false)
                  setStateFilter(!stateFilter)
                  setCityFilter(false)
                }}
              >
                
                {
                  stateFilterVal === "" ? "State" : stateFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <Menu
                show={stateFilter}
                data={states}
                setItem={setStateFilterVal}
                setShow={setStateFilter}
              />
            </div>
            <div className="mb-3 relative">
              <button 
                id="cityFilter"
                style={{backgroundColor: "#232323"}}
                className="w-full relative text-white text-lg focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(false)
                  setStateFilter(false)
                  setCityFilter(!cityFilter)
                }}
              >
                
                {
                  cityFilterVal === "" ? "City" : cityFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <Menu
                show={cityFilter}
                data={citys}
                setItem={setCityFilterVal}
                setShow={setCityFilter}
              />
            </div>
          </div>
    )
}