import React, { useState } from 'react'
import Header from './components/Header'
import DishContainer from './components/DishContainer'
import OrderContainer from './components/OrderContainer'
import { orderData } from './data';

function App(props) {
    let [oData, setOData] = useState(orderData);

  return (
    <div className='bg-slate-100 h-screen'>
      <Header title={props.title}/>
      <div className='flex flex-1 px-10'>
        <div className='w-7/12'>
            <DishContainer oData={oData} setOData={setOData}/>
        </div>
        <div className='w-5/12'>
          <OrderContainer oData={oData}/>
        </div>
      </div>
    </div>
  )
}

export default App