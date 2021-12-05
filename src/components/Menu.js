import React from 'react'

export default function Menu({show, data, setItem, setShow}) {
  if (show) {
    return (
      <div className="menu">
        <div className="menu bg-white text-base absolute left-0 right-0 z-50 list-none divide-y divide-gray-100 rounded-lg shadow my-4" style={{maxHeight: 300, overflow: 'auto'}}>
          <ul className="py-1 menu-items" aria-labelledby="dropdown">
            <li onClick={() => {
              setItem("")
              setShow(false)
            }}>
              <a className="menu-item cursor-pointer text-sm hover:bg-gray-900 hover:text-gray-100 text-gray-700 block px-4 py-2">All</a>
            </li>
            {
              data.map((item, index) => (
                <li key={index} onClick={() => {
                  setItem(item)
                  setShow(false)
                }}>
                  <a className="menu-item cursor-pointer text-sm hover:bg-gray-900 hover:text-gray-100 text-gray-700 block px-4 py-2">{item}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}
