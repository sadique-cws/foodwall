
const OrderContainer = ({oData}) => {
  return (
    <div className='flex flex-1 p-3'>
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
  )
}

export default OrderContainer