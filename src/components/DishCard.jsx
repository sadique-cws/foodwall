import { useState } from "react"
import { orderData } from "../data";

const DishCard = (props) => {
  let [counter, setCounter] = useState(0);
  let [showMinus, setShowMinus] = useState(false);

  const handleMinus = () => {
    if(counter <= 0){
      props.setOData(props.oData.filter((item) => item.dishId != props.dish.id))
      setShowMinus(false);
    }
    else{
      setCounter(counter -= 1);
      props.setOData(props.oData.map(
        (item) => (item.dishId == props.dish.id)? {...item, qty:item.qty-1}: item)
      )
    }
  }

  const handlePlus = () => {
    setCounter(counter += 1);
    setShowMinus(true);

    let existOrder = props.oData.find((item) => item.dishId == props.dish.id)

    if(existOrder){
          let updatedOrder = props.oData.map((item) => (item.dishId == props.dish.id)? {...item, qty:item.qty+1} : item)
          props.setOData(updatedOrder);
    }
    else{
    props.setOData([
      ...props.oData,
      {id:props.oData.length+1, 
        dishname:props.dish.name, 
        qty:1, 
        amount:props.dish.price,
        dishId:props.dish.id
      }])
    }
    
  }
  return (
    <div className='flex flex-col flex-1 bg-white border-slate-500 border rounded-lg overflow-hidden'>
        <img src={"/dish/" + props.dish.image} className='w-full h-[80px]' alt="" />
        <div className="px-3 py-2">
            <h2 className="font-bold">{props.dish.name}</h2>
            <h6 className="font-semibold">₹{props.dish.price}/-</h6>

            <div className="flex justify-center gap-3">
              {
                showMinus && <button className="bg-red-700 text-sm text-white px-2 flex-1 justify-center pb-1 rounded-lg flex items-center text-3xl" onClick={handleMinus}><span>-</span></button>
              }
              
              <span className="px-2 flex-1 justify-center text-sm pb-1 pt rounded-lg flex items-center text-3xl">{counter}</span>
              <button className="bg-green-700 text-white text-sm px-2 flex-1 justify-center pb-1 pt rounded-lg flex items-center text-3xl" onClick={handlePlus}><span>+</span></button>
            </div>
        </div>
    </div>
  )
}

export default DishCard