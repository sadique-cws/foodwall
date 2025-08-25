import DishCard from './DishCard'
import { dishes } from '../data'

const DishContainer = ({oData, setOData}) => {
  return (
    <div className='flex flex-col flex-1'>
        <div className="flex py-3">
            <input type="search" placeholder='Search Here' name="search" className='border border-slate-400 px-3 py-2 w-full' id="" />
        </div>
        <div className="grid grid-cols-5 gap-5">
            { dishes.map((dish) => <DishCard oData={oData} setOData={setOData} dish={dish}/>)}
        </div>
    </div>
  )
}

export default DishContainer