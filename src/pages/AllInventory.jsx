import { useState } from "react"; 
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";
import InventoryCard from "../components/InventoryCard";
import "../index.css"; 


const AllInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Store all categories
  const categories = {
    All: [...excavatorsData, ...loadersData, ...forkliftsData, ...cranesData],
    Excavators: [...excavatorsData], // Ensure fresh array each time
    Loaders: [...loadersData],
    Forklifts: [...forkliftsData],
    Cranes: [...cranesData],
  };

  // Ensure selected category always resets correctly
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search when switching categories
  };

  // Get items based on selected category
  const filteredByCategory = categories[selectedCategory] || [];

  // Filter items based on search term
  const filteredItems = filteredByCategory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>All Inventory</h2>

      {/* Category Selection */}
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

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
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <InventoryCard key={item.id} item={item} />)
        ) : (
          <p className="no-items-message">No items found for this category.</p>
        )}
      </div>
    </div>
    
  );
};

export default AllInventory;
