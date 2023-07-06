'use client';
import React  from "react"; 
  
function Header() {
   return (
    <div className=" p-4  left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
      <header className=" flex justify-between dark:text-white items-center  ">
        {/* Left Side  */}
        <div className=" flex items-center space-x-2  md:space-x-4">
          <h3 className=" md:text-4xl   md:inline-block font-bold  font-sans">
            Drogy Zone
          </h3>
          <div className=" flex items-center ">
          </div>
        </div>     
      </header>     
    </div>
  );
}

export default Header;