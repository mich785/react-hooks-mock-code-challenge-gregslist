import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ data }) {
  const { listings, onRemoveListing } = data;
  const sortedListings = listings.sort((a, b) => a.location.localeCompare(b.location));

  function handleDelete (id)  {
    onRemoveListing(id);
  };

  return (
    <main>
      <ul className="cards">
        {sortedListings.map((listing) => (
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