import React,{useEffect, useState} from 'react'

function Moduleii() {

    const [store, setStore] = useState([]);
  
    async function fetchdata() {
      const res = await fetch('https://wtf-assign-1.onrender.com/member');
      const updata = await res.json();
      setStore(updata);
    }
  
    useEffect(() => {
      fetchdata();
    }, []);
  
  


  return (
   <>
      <h2 className="text-xl font-semibold mb-4 p-2 bg-gray-200 rounded">
        Module(2)- Data Ingestion Engine
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow">
          
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Id</th>
              <th className="px-4 py-2 border">Gym-Id</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Plan Type</th>
              <th className="px-4 py-2 border">Member Type</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {store.map((item, i) => (
              <tr key={i} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.email}</td>
                <td className="px-4 py-2 border">{item.phone}</td>
                <td className="px-4 py-2 border">{item.plan_type}</td>
                <td className="px-4 py-2 border">{item.member_type}</td>

                {/* ✅ Status Color */}
                <td
                  className="px-4 py-2 border font-semibold text-blue-700"
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default Moduleii