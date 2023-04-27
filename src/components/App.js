import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./ListingsForm";

function App() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setListings(data);
    })
    .catch(error => {
      console.error('Error fetching transactions:', error);
    });
  }, []);

  const handleCreateListing = (newListing) => {
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((response) => response.json())
      .then((data) => {
        setListings([...listings, data]);
      })
      .catch((error) => {
        console.error("Error creating listing:", error);
      });
  };

  const handleRemoveListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  return (
    <div className="app">
      <Header />
      <NewListingForm onSubmit={handleCreateListing} />
      <ListingsContainer data={{ listings: listings }}
       onRemoveListing={handleRemoveListing}/>
    </div>
  );
}
export default App;