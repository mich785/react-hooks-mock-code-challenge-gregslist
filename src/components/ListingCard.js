import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      onDelete(data.id)
    })
    .catch(error => console.log(error));
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">${listing.price}</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavorite}>
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={handleDeleteClick}>
           🗑
        </button>
      </div>
    </li>
  );
}
export default ListingCard