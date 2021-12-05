import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'
import originData from './data'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

export default function Edvora() {

  
  const [data, setData] = useState(originData)
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const [productFilter, setProductFilter] = useState(false)
  const [stateFilter, setStateFilter] = useState(false)
  const [cityFilter, setCityFilter] = useState(false)

  const [productFilterVal, setProductFilterVal] = useState("")
  const [stateFilterVal, setStateFilterVal] = useState("")
  const [cityFilterVal, setCityFilterVal] = useState("")


  useEffect(() => {
    const filterVal = data.filter(item => 
      item.brand_name.indexOf(productFilterVal) > -1 &&
      item.address.state.indexOf(stateFilterVal) > -1 &&
      item.address.city.indexOf(cityFilterVal) > -1
    )
    setFilterVal(filterVal)
  }, [productFilterVal, stateFilterVal, cityFilterVal])

  return (
    <div className="fixed inset-0 overflow-auto edvora" onTouchEnd={e => console.log(e)} onClick={(e) => {
      if (e.target.id !== "productFilter" && e.target.id !== "stateFilter" && e.target.id !== "cityFilter" && e.target.className && e.target.className.indexOf('menu') === -1 && e.target.className.indexOf('menu-items') === -1 && e.target.className.indexOf('menu-item') === -1)  {
        setProductFilter(false)
        setStateFilter(false)
        setCityFilter(false)
      }
    }}>
      <div className="w-full relative p-8 text-white grid grid-cols-5 gap-4">
        <div>
          <div className="w-full rounded-lg p-4 bg-gray-900">
            <div className="text-gray-400 mb-5 pb-3" style={{borderBottom:'1px solid #666'}}>
              Filters
            </div>
            <div className="mb-3 relative">
              <button 
                id="productFilter"
                className="w-full relative text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(!productFilter)
                  setStateFilter(false)
                  setCityFilter(false)
                }}
              >
                {
                  productFilterVal === "" ? "Products" : productFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                className="w-full relative text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(false)
                  setStateFilter(!stateFilter)
                  setCityFilter(false)
                }}
              >
                
                {
                  stateFilterVal === "" ? "States" : stateFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                className="w-full relative text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"
                onClick={() => {
                  setProductFilter(false)
                  setStateFilter(false)
                  setCityFilter(!cityFilter)
                }}
              >
                
                {
                  cityFilterVal === "" ? "Citys" : cityFilterVal
                }
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <Menu
                show={cityFilter}
                data={citys}
                setItem={setCityFilterVal}
                setShow={setCityFilter}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-2xl mb-4">
            Edvora
          </div>
          <div className="text-xl mb-4 text-gray-600">
            Products
          </div>
          
          <div className="text-lg mb-4 pb-3" style={{borderBottom:'1px solid #666'}}>
            {
              productFilterVal === "" ? "Product Name" : productFilterVal
            }
          </div>
            {
              filterVal.length > 0 ? (

                <div>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  responsive={responsive}
                  infinite
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  transitionDuration={1000}
                >
                  {filterVal.map((product, index) => (
                    <div key={'product' + index} className="p-2 pt-0 pb-0 select-none">
                      <img src={product.image} draggable="false" className="w-100 cursor-pointer" />
                    </div>
                  ))}
                </Carousel>
              </div>
              ) : (
                <div>
                  no items
                </div>
              )
            }
        </div>
      </div>
    </div>
  )
}
