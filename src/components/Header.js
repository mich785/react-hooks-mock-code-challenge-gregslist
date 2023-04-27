import React, { useState, useEffect } from "react";
import Search from "./Search";
import ListingsContainer from "./ListingsContainer";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch} />
    </header>
  );
}

export default Header;






