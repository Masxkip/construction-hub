import { useState, useEffect } from "react";
import InventoryCard from "./InventoryCard";

const InventorySearch = ({ inventoryData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    manufacturer: [],
    year: [],
    condition: [],
    price: ""
  });
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const currentValues = prev[key] || [];
      if (currentValues.includes(value)) {
        return { ...prev, [key]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...currentValues, value] };
      }
    });
  };

  const getFilterOptions = (key) => {
    const unique = new Set();
    inventoryData.forEach((item) => {
      if (item[key]) unique.add(item[key]);
    });
    return [...unique];
  };

  const categories = getFilterOptions("category");
  const manufacturers = getFilterOptions("manufacturer");
  const years = getFilterOptions("year");
  const conditions = getFilterOptions("condition");

  useEffect(() => {
    const results = inventoryData.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        filters.category.length === 0 || filters.category.includes(item.category);

      const matchesManufacturer =
        filters.manufacturer.length === 0 || filters.manufacturer.includes(item.manufacturer);

      const matchesYear =
        filters.year.length === 0 || filters.year.includes(item.year?.toString());

      const itemPrice = typeof item.price === "string" && item.price.startsWith("$")
        ? parseFloat(item.price.replace(/[^\d.]/g, ""))
        : 0;
      const matchesPrice =
        !filters.price || itemPrice <= parseFloat(filters.price);

      const matchesCondition =
        filters.condition.length === 0 || filters.condition.includes(item.condition);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesManufacturer &&
        matchesYear &&
        matchesPrice &&
        matchesCondition
      );
    });

    setFilteredItems(results);
  }, [inventoryData, searchQuery, filters]);

  return (
    <div className="inventory-container">
      <div className="search-bar" style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="clear-search-btn"
          >
            ✕
          </button>
        )}
        <button onClick={() => setFilterMenuOpen(true)}>Filter</button>
      </div>

      {filterMenuOpen && (
  <div className="filter-overlay">
    <div className="filter-modal">
      <button
        className="modal-close-btn"
        onClick={() => setFilterMenuOpen(false)}
      >
        ✖
      </button>

      <div className="filter-fields">
        <div className="filter-group">
          <label>Category</label>
          <div className="checkbox-group">
            {categories.map((cat) => (
              <label key={cat} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => handleCheckboxChange("category", cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Manufacturer</label>
          <div className="checkbox-group">
            {manufacturers.map((man) => (
              <label key={man} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={filters.manufacturer.includes(man)}
                  onChange={() => handleCheckboxChange("manufacturer", man)}
                />
                {man}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Year</label>
          <div className="checkbox-group">
            {years.map((y) => (
              <label key={y} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={filters.year.includes(y.toString())}
                  onChange={() => handleCheckboxChange("year", y.toString())}
                />
                {y}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Condition</label>
          <div className="checkbox-group">
            {conditions.map((c) => (
              <label key={c} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={filters.condition.includes(c)}
                  onChange={() => handleCheckboxChange("condition", c)}
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Max Price ($)</label>
          <input
            type="number"
            placeholder="e.g., 75000"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: e.target.value })
            }
          />
        </div>

        <div className="filter-buttons">
          <button
            onClick={() => {
              setSearchQuery("");
              setFilters({
                category: [],
                manufacturer: [],
                year: [],
                condition: [],
                price: ""
              });
            }}
          >
            Reset Filters
          </button>

          <button onClick={() => setFilterMenuOpen(false)}>
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))
        ) : (
          <p className="no-items-message">No matching results found.</p>
        )}
      </div>
    </div>
  );
};

export default InventorySearch;
