import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
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
            onClick={handleFavorite}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleFavorite}
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
