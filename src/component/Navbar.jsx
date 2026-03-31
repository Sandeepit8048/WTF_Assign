import { NavLink, Routes, Route } from "react-router-dom";

import Modulei from "./Modulei";
import Moduleii from "./Moduleii";
import Moduleiii from "./Moduleiii";
import Moduleiv from "./Moduleiv";

function Navbar() {
  
  return (
    <>

      <h1 className="text-3xl font-bold text-center text-gray-800  my-4">
        WTF Assignment - Dashboard
      </h1>
      <div className="flex justify-center items-center gap-4 bg-blue-50 shadow-md p-4 rounded-lg">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white ${
              isActive ? "bg-blue-700" : "bg-blue-500"
            }`
          }
        >
          Module I
        </NavLink>

        <NavLink
          to="/module2"
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white ${
              isActive ? "bg-green-700" : "bg-green-500"
            }`
          }
        >
          Module II
        </NavLink>

        <NavLink
          to="/module3"
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white ${
              isActive ? "bg-purple-700" : "bg-purple-500"
            }`
          }
        >
          Module III
        </NavLink>

        <NavLink
          to="/module4"
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white ${
              isActive ? "bg-red-700" : "bg-red-500"
            }`
          }
        >
          Module IV
        </NavLink>

      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Modulei />} />
        <Route path="/module2" element={<Moduleii />} />
        <Route path="/module3" element={<Moduleiii />} />
        <Route path="/module4" element={<Moduleiv />} />
      </Routes>
    </>
  );
}

export default Navbar;