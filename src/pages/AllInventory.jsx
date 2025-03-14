import { useState } from "react";
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import InventoryCard from "../components/InventoryCard";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";

const AllInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Combine all categories into one array
  const allItems = [...excavatorsData, ...loadersData, ...forkliftsData, ...cranesData];

  // Filter items based on search term
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>All Inventory</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Inventory..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Inventory List */}
      <div className="items-grid">
        {filteredItems.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllInventory;
