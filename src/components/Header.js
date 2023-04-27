import React, { useState, useEffect } from "react";
import Search from "./Search";


function Header({ onSearch, onCreateListing }) {
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  function handleSearch(query) {
    setSearch(query);
  }

  



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
