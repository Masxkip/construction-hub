import { useState } from "react";
import excavatorsData from "../data/excavatorsData";
import InventoryCard from "../components/InventoryCard";

const Excavators = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Ensure data exists before filtering
  if (!excavatorsData || excavatorsData.length === 0) {
    return <p>Error: No excavator data available.</p>;
  }

  // Filter excavators by search term
  const filteredExcavators = excavatorsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>Excavators for Inquiry</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Excavators..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Excavator List */}
      <div className="items-grid">
        {filteredExcavators.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Excavators;
