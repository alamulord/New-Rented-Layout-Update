

export default function page() {
  return (
    <div className="container h-screen bg-fuchsia-300 pt-5">
      <h1 className="text-center text-black uppercase mb-5 font-bold">order</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-grey-700 uppercase bg-white">
            <tr className=" hover:bg-gray-100">
              <th scope="col" className="px-6 py-3">Oredr id</th>
              <th scope="col" className="px-6 py-3">Oredr Description</th>
              <th scope="col" className="px-6 py-3">Date ordered</th>
              <th scope="col" className="px-6 py-3">Oredr Total</th>
              <th scope="col" className="px-6 py-3">Oredr Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000001</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$490</td>
              <td className="px-6 py-3">Pending</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000002</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$470</td>
              <td className="px-6 py-3">Cancelled</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000003</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$495</td>
              <td className="px-6 py-3">Completed</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000001</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$490</td>
              <td className="px-6 py-3">Pending</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000002</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$470</td>
              <td className="px-6 py-3">Cancelled</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
            <tr className=" hover:bg-gray-100">
              <td className="px-6 py-3">0000003</td>
              <td className="px-6 py-3">A two bedroom flat, Two self contain</td>
              <td className="px-6 py-3">19-10-2023</td>
              <td className="px-6 py-3">$495</td>
              <td className="px-6 py-3">Completed</td>
              <td className=" px-6 py-3">
                <a href="/checkout"
                    className="flex w-auto justify-center rounded-md bg-slate-100 px-3 py-1.5 cursor-pointer  
                    text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                     view
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
