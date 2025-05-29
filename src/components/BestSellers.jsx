import bestSellers from "../data/bestSellersData";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <h2 className="welcome-section">Our Most Trusted Machines on Sale</h2>
      <div className="best-sellers-grid">
        {bestSellers.map((item) => (
          <div key={item.id} className="best-seller-card">
            <img src={item.images[0]} alt={item.name} className="best-seller-image" />
            <h3>{item.name}</h3>
            <Link to={`/inventory/item/${item.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="discover-more">
        <Link to="/inventory" className="discover-btn">Discover More Items</Link>
      </div>
    </section>
  );
};

export default BestSellers;
