import { useParams } from "react-router-dom";
import { useState } from "react";
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";
import "../index.css"; // Ensure styling is applied

const ItemDetail = () => {
  const { id } = useParams();

  // Combine all inventory items
  const allItems = [...excavatorsData, ...loadersData, ...forkliftsData, ...cranesData];

  // Find the selected item
  const item = allItems.find((item) => item.id.toString() === id);

  // ✅ Move useState **above** the conditional return
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle case where item is not found
  if (!item) {
    return <p className="error-message">Item not found.</p>;
  }

  // Navigation functions for slider
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-st">
    <div className="section-content">
      <div className="item-detail-card">
        {/* Image Section with Slider */}
        <div className="item-detail-image">
          <button className="prev-btn" onClick={prevImage}>❮</button>
          <img src={item.images[currentIndex]} alt={item.name} />
          <button className="next-btn" onClick={nextImage}>❯</button>
        </div>

        {/* Image Thumbnails */}
        <div className="image-thumbnails">
          {item.images.slice(0, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="item-detail-info">
          <h2>{item.name}</h2>
          <p className="item-detail-price"><strong>Price:</strong> {item.price}</p>
          <p><strong>Company:</strong> {item.companyName}</p>

             {/* Contact Buttons */}
          <div className="contact-buttons">
            <a href={`tel:${item.phone}`} className="call-btn">📞 915-583-2274</a>
            <a href={`mailto:${item.email}`} className="email-btn">✉ Email Seller</a>
          </div>
          {/* Additional Details */}
          <div className="item-specs">
            <h3>General</h3>
            <div className="spec-item">
              <span>Manufacturer:</span>
              <span>{item.manufacturer}</span>
            </div>
            <div className="spec-item">
              <span>Model:</span>
              <span>{item.model}</span>
            </div>
            <div className="spec-item">
              <span>Serial Number:</span>
              <span>{item.serialNumber}</span>
            </div>
            <div className="spec-item">
              <span>Condition:</span>
              <span>{item.condition}</span>
            </div>
            <div className="spec-item">
              <span>Description:</span>
              <span>{item.description}</span>
            </div>
          </div>

         

          {/* Company Info */}
          <div className="company-info">
            <p>Seller: {item.companyName}</p>
            <a href={`mailto:${item.companyEmail}`}>{item.companyEmail}</a>
          </div>

           {/* Get a Quote Button */}
           <div className="quote-button">
            <a href={`/get-quote/${item.id}`} className="get-quote-btn"> Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ItemDetail;
