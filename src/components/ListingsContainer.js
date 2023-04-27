import React from "react";
import ListingCard from "./ListingCard";
function ListingsContainer({ data }) {
  
  const { listings, onRemoveListing } = data;
  const handleDelete = (id) => {
    onRemoveListing(id);
  };
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}
export default ListingsContainer;