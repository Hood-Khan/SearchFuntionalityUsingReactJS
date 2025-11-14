import React, { useEffect, useState } from "react";
import { brands } from "./ArrayOfObj";

function App() {
  const [searchbrand, setsearchbrand] = useState("");
  const [newList, setnewList] = useState([]);

  function handleSearch(e) {
    setsearchbrand(e?.target.value);
  }

  let filterList = brands.filter((currentItem) => {
    if (searchbrand === "") {
      return currentItem;
    } else if (
      currentItem?.item?.toLowerCase().includes(searchbrand?.toLowerCase())
    ) {
      return currentItem;
    }
  });

  useEffect(() => {
    setnewList(filterList);
  }, [searchbrand]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center p-6">
      {/* Search Box */}
      <div className="w-full max-w-md mb-8">
        <input
          type="search"
          placeholder="Search for brands..."
          value={searchbrand}
          onChange={(event) => handleSearch(event)}
          className="w-full p-3 text-white bg-white/10 backdrop-blur-md 
                     border border-white/20 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-pink-400 
                     placeholder-gray-300 transition-all"
        />
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {newList.map((brand) => (
          <div
            key={brand.id}
            className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg 
                       border border-white/20 shadow-xl 
                       hover:scale-105 hover:bg-white/20 
                       transition duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-pink-300">
              {brand.item}
            </h2>
            {/* <p className="text-gray-300 mt-2">{brand.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
