import { useParams } from "react-router-dom";
import excavatorsData from "../data/excavatorsData"
;

const ItemDetailPage = () => {
  const { id } = useParams();
  const item = excavatorsData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p style={{ color: "red" }}>Item not found.</p>;
  }

  return (
    <div className="item-detail-container">
      {/* Navigation Icons */}
      <div className="item-nav">
        <button>🔙</button>
        <button>❤️</button>
        <button>📤</button>
      </div>

      {/* Main Item Image & Thumbnails */}
      <div className="item-images-section">
        <img src={item.images[0]} alt={item.name} className="main-image" />
        <div className="thumbnails">
          {item.images.map((img, index) => (
            <img key={index} src={img} alt={`preview-${index}`} className="thumbnail" />
          ))}
        </div>
      </div>

      {/* Item Info */}
      <div className="item-info">
        <h2>{item.name}</h2>
        <p className="price">{item.price}</p>
        <p className="description">{item.description}</p>

        <ul className="item-meta">
          <li><strong>Model:</strong> {item.model}</li>
          <li><strong>Manufacturer:</strong> {item.manufacturer}</li>
          <li><strong>Condition:</strong> {item.condition}</li>
          <li><strong>Serial Number:</strong> {item.serialNumber}</li>
          <li><strong>Location:</strong> {item.location}</li>
        </ul>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <a href={`tel:${item.phone}`} className="cta-call">📞 Call</a>
          <a href={`mailto:${item.email}`} className="cta-email">✉️ Email</a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
