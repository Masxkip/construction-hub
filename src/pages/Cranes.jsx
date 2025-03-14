import { useState } from "react";
import cranesData from "../data/cranesData";
import InventoryCard from "../components/InventoryCard";

const Cranes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cranes based on search term
  const filteredCranes = cranesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>Cranes for Inquiry</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Cranes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Cranes List */}
      <div className="items-grid">
        {filteredCranes.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cranes;
