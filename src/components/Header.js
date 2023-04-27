import React, { useState, useEffect } from "react";
import Search from "./Search";


function Header({ onSearch, onCreateListing }) {
  const [search, setSearch] = useState("");
  const [newListing, setNewListing] = useState({ description: "", image: "", location: "" });
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

  function handleNewListingSubmit(e) {
    e.preventDefault();
    onCreateListing(newListing);
    setNewListing({ description: "", image: "", location: "" });
    // make a POST request to add the new listing to the backend
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New listing added:", data);
      })
      .catch((error) => {
        console.error("Error adding new listing:", error);
      });
  }

  function handleNewListingInputChange(e) {
    const { name, value } = e.target;
    setNewListing((prevListing) => ({ ...prevListing, [name]: value }));
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
