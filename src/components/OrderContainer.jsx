import { useEffect, useState } from "react"

const OrderContainer = ({oData}) => {
    const [total, setTotal] = useState(0);
   useEffect(() => {
            setTotal(oData.reduce((sum, current) => sum + (current.qty * current.amount), 0))
   }, [oData])
  return (
    <div className='flex flex-1 p-3'>
       <div className="overflow-y-scroll h-[550px] flex-1 py-3">
         <table className=" w-full">
            <thead>
                <tr>
                    <th className="border p-3 border-sky-500">Product Name</th>
                    <th className="border p-3 border-sky-500">Qt</th>
                    <th className="border p-3 border-sky-500">Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    oData.map((orderItem) => (
                <tr>
                    <td className="border p-3 border-sky-500">{orderItem.dishname}</td>
                    <td className="border p-3 border-sky-500">{orderItem.qty}</td>
                    <td className="border p-3 border-sky-500">{orderItem.amount * orderItem.qty}</td>
                </tr>
                    ))
                }
                
            </tbody>
        </table>
       </div>

        <div className="flex fixed bottom-5 px-10 w-full">
            <h1 className="text-3xl font-bold">Total Amount : {total}</h1>
        </div>
    </div>
  )
}

export default OrderContainer