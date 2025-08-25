import React, { useState } from 'react'
import DishContainer from '../components/DishContainer'
import OrderContainer from '../components/OrderContainer'

const Homepage = () => {
        let [oData, setOData] = useState([]);

  return (
     <div className='flex flex-1 px-10'>
              <div className='w-7/12'>
                  <DishContainer oData={oData} setOData={setOData}/>
              </div>
              <div className='w-5/12'>
                <OrderContainer oData={oData}/>
              </div>
            </div>
  )
}

export default Homepage