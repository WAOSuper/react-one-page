import React, {useState, useEffect} from 'react'
import ListByBrand from '../components/ListByBrand'
import ListByAll from '../components/ListByAll'
import Filter from '../components/Filter'
import "react-multi-carousel/lib/styles.css"
import axios from 'axios';

export default function Edvora() {
  const baseURL = 'http://localhost:3000/data.json'
  
  const [data, setData] = useState([])
  const [filterVal, setFilterVal] = useState([])

  const allBrands = data.map(item => item.brand_name)
  const brands = []
  allBrands.forEach(item => {
    if (brands.filter(bItem => bItem === item).length === 0) {
      brands.push(item)
    }
  })

  const allStates = data.map(item => item.address.state)
  const states = []
  allStates.forEach(item => {
    if (states.filter(bItem => bItem === item).length === 0) {
      states.push(item)
    }
  })

  const allCitys = data.map(item => item.address.city)
  const citys = []
  allCitys.forEach(item => {
    if (citys.filter(bItem => bItem === item).length === 0) {
      citys.push(item)
    }
  })

  const [productFilter, setProductFilter] = useState(false)
  const [stateFilter, setStateFilter] = useState(false)
  const [cityFilter, setCityFilter] = useState(false)

  const [productFilterVal, setProductFilterVal] = useState("")
  const [stateFilterVal, setStateFilterVal] = useState("")
  const [cityFilterVal, setCityFilterVal] = useState("")

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, [])
  useEffect(() => {
    
    const filterVal = data.filter(item => 
      item.brand_name.indexOf(productFilterVal) > -1 &&
      item.address.state.indexOf(stateFilterVal) > -1 &&
      item.address.city.indexOf(cityFilterVal) > -1
    )
    setFilterVal(filterVal)
  }, [productFilterVal, stateFilterVal, cityFilterVal, data])

  return (
    <div className="fixed inset-0 overflow-auto edvora" onTouchEnd={e => console.log(e)} onClick={(e) => {
      if (e.target.id !== "productFilter" && e.target.id !== "stateFilter" && e.target.id !== "cityFilter" && e.target.className && e.target.className.indexOf('menu') === -1 && e.target.className.indexOf('menu-items') === -1 && e.target.className.indexOf('menu-item') === -1)  {
        setProductFilter(false)
        setStateFilter(false)
        setCityFilter(false)
      }
    }}>
      <div className="w-full relative p-8 text-white grid grid-cols-5 gap-4 max-w-screen-xl m-auto">
        <div className='col-span-2 md:col-span-1'>
          <Filter 
            productFilter = {productFilter}
            stateFilter = {stateFilter}
            cityFilter = {cityFilter}
            brands = {brands}
            states = {states}
            citys = {citys}
            productFilterVal = {productFilterVal}
            stateFilterVal = {stateFilterVal}
            cityFilterVal = {cityFilterVal}
            setProductFilter = {setProductFilter}
            setStateFilter = {setStateFilter}
            setCityFilter = {setCityFilter}
            setProductFilterVal = {setProductFilterVal}
            setStateFilterVal = {setStateFilterVal}
            setCityFilterVal = {setCityFilterVal}
          />
        </div>
        <div className="col-span-3 md:col-span-4">
          <div className="text-4xl mb-5">
            Edvora
          </div>
          <div className="text-2xl mb-5 products-title">
            Products
          </div>
          {
            productFilterVal === "" && brands.map((brand,bIndex) => (
              <ListByBrand
                key = {bIndex}
                brand = {brand}
                product = {filterVal}
              />
            ))
          }
          {
            productFilterVal && filterVal.length > 0 ? (
              <ListByAll
                brand={productFilterVal} 
                products = {filterVal}
              />
            ) : productFilterVal ? (
              <>
              <div className="text-xl mb-5 pb-3 product-brand">
                {productFilterVal}
              </div>
              <div className='w-full flex items-center justify-center product-list-body'>
                No matched items
              </div>
              </>
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </div>
  )
}
