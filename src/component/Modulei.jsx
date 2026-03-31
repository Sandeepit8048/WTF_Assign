import React, { useEffect, useState } from 'react';

function Modulei() {
  const [data, setData] = useState([]);

  async function fetchdata() {
    const res = await fetch('http://localhost:4000/status');
    const updata = await res.json();
    setData(updata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 p-2 bg-gray-200 rounded">
        Module(1)- Data Ingestion Engine
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow">
          
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Id</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">City</th>
              <th className="px-4 py-2 border">Capacity</th>
              <th className="px-4 py-2 border">Open</th>
              <th className="px-4 py-2 border">Close</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.city}</td>
                <td className="px-4 py-2 border">{item.capacity}</td>
                <td className="px-4 py-2 border">{item.opens}</td>
                <td className="px-4 py-2 border">{item.closes}</td>

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
  );
}

export default Modulei;