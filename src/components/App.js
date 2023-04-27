import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

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

  const handleRemoveListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer data={{ listings: listings }}
       onRemoveListing={handleRemoveListing}/>
    </div>
  );
}
export default App;