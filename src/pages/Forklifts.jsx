import { useState } from "react";
import forkliftsData from "../data/forkliftsData";
import InventoryCard from "../components/InventoryCard";

const Forklifts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter forklifts based on search term
  const filteredForklifts = forkliftsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>Forklifts for Inquiry</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Forklifts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Forklifts List */}
      <div className="items-grid">
        {filteredForklifts.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Forklifts;
