import React ,{useState}from "react";

function NewListingForm({ onSubmit, onInputChange }) {
  const [newListing, setNewListing] = useState({ description: "", image: "", location: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newListing);
    setNewListing({ description: "", image: "", location: "" });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewListing((prevListing) => ({ ...prevListing, [name]: value }));
  }

  return (
    <form className="new-listing-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newListing.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newListing.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={newListing.location}
        onChange={handleInputChange}
      />
      <button type="submit">Create Listing</button>
    </form>
  );
}

export default NewListingForm;
