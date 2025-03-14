import { useState } from "react";
import loadersData from "../data/loadersData";
import InventoryCard from "../components/InventoryCard";

const Loaders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter loaders based on search term
  const filteredLoaders = loadersData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>Loaders for Inquiry</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Loaders..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Loaders List */}
      <div className="items-grid">
        {filteredLoaders.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Loaders;
