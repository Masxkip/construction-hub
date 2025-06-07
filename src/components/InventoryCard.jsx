import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const InventoryCard = ({ item }) => {
  console.log("Rendering InventoryCard with item:", item); // Debugging

  // ✅ Move useState **above** the conditional return
  const [currentImage, setCurrentImage] = useState(0);

  // Error handling for missing item data
  if (!item || !item.images || item.images.length === 0) {
    return <p style={{ color: "red" }}>Error: Item data is missing or incomplete.</p>;
  }

  // Limit images to show only the first 5
  const displayedImages = item.images.slice(0, 4);

  // Handle next and previous images
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % displayedImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + displayedImages.length) % displayedImages.length);
  };

  return (
    <div className="inventory-card">
      <div className="image-slider">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={displayedImages[currentImage]} alt={item.name} />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Image Dots */}
      <div className="image-dots">
        {displayedImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>

      {/* Item Details */}
      <h3 className="item-name">{item.name}</h3>
      <p className="item-price"  style={{ color: "red" }}>Price: {item.price}</p>
      <p className="item-price">Condition: {item.condition}</p>
      <p className="item-price">Location: {item.location}</p>

      <Link to={`/inventory/item/${item.id}`} className="view-details-btn">
              View Details
            </Link>
    </div>
  );
};

export default InventoryCard;
