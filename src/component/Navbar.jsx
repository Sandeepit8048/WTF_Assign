import { Link } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Modulei from "./Modulei";
import Moduleii from "./Moduleii";
import Moduleiii from "./Moduleiii";
import Moduleiv from "./Moduleiv";

function Navbar() {

  return (
    <>
      <h1 className='text-3xl font-bold text-center text-gray-800 my-4'>
        WTF Assignment
      </h1>

      <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <Link to="/module1" className="px-4 py-2 bg-blue-500 text-white rounded">Module I</Link>
        <Link to="/module2" className="px-4 py-2 bg-green-500 text-white rounded">Module II</Link>
        <Link to="/module3" className="px-4 py-2 bg-purple-500 text-white rounded">Module III</Link>
        <Link to="/module4" className="px-4 py-2 bg-red-500 text-white rounded">Module IV</Link>
      </div>



      <Routes>
        <Route path="/module1" element={<Modulei />} />
        <Route path="/module2" element={<Moduleii />} />
        <Route path="/module3" element={<Moduleiii />} />
        <Route path="/module4" element={<Moduleiv />} />
      </Routes>
  

      
    </>
  );
}

export default Navbar;