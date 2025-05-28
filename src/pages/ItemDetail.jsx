import { useParams } from "react-router-dom";
import { useState } from "react";
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import bulldozersData from "../data/bulldozersData";
import cranesData from "../data/cranesData";


const ItemDetail = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const allItems = [...bulldozersData, ...excavatorsData, ...loadersData, ...forkliftsData, ...cranesData];
  const item = allItems.find((item) => item.id.toString() === id);

  if (!item) return <p className="error-message">Item not found.</p>;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="item-detail-layout">
      {/* Left side - Main Image & Thumbnails */}
      <div className="item-image-side">
        <div className="slider-wrapper">
          <img src={item.images[currentIndex]} alt={item.name} className="main-img" />
          <button className="nav-btn left" onClick={prevImage}>❮</button>
          <button className="nav-btn right" onClick={nextImage}>❯</button>
        </div>

        {/* Thumbnail row */}
        <div className="thumbnail-row">
          {item.images.slice(0, 6).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`thumb ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <p className="image-note">
          Pictures may not be current. Contact us for the latest. Items shown may not be included in sale price unless noted.
        </p>
      </div>

      {/* Right side - Item Info */}
      <div className="item-info-side">
        <h1 className="item-title">{item.name}</h1>
        <p className="item-price">{item.price}</p>

        <ul className="item-specs">
          <li><strong>Condition:</strong> {item.condition || "N/A"}</li>
          <li><strong>Manufacturer:</strong> {item.manufacturer || "N/A"}</li>
          <li><strong>Model:</strong> {item.model || "N/A"}</li>
          <li><strong>Serial Number:</strong> {item.serialNumber || "N/A"}</li>
        </ul>

        <div className="item-contact">
          <p><strong>Phone:</strong> <a href={`tel:${item.phone}`}>{item.phone}</a></p>
          <p><strong>Company Email:</strong> <a href={`mailto:${item.companyEmail}`}>{item.companyEmail}</a></p>
        </div>

        <div className="item-description">
          <h3>Description</h3>
          <p>{item.description || "No description available."}</p>
        </div>

        {/* Action buttons */}
        <div className="quote-buttons">
          <a href={`/get-quote/${item.id}`} className="get-quote-btn">Get a Quote</a>
          <button className="second-btn">Download Spec Sheet</button>
        </div>

        {/* Divider line */}
        <hr className="divider" />
      </div>
    </section>
  );
};

export default ItemDetail;
