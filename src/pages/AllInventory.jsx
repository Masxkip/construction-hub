import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";
import InventorySearch from "../components/InventorySearch";
import InventoryCard from "../components/InventoryCard";
import "../index.css";

const AllInventory = () => {
  // Combine all inventory data into one array
  const allItems = [
    ...excavatorsData.map(item => ({ ...item, category: "Excavators" })),
    ...loadersData.map(item => ({ ...item, category: "Loaders" })),
    ...forkliftsData.map(item => ({ ...item, category: "Forklifts" })),
    ...cranesData.map(item => ({ ...item, category: "Cranes" }))
  ];

  return (
    <div className="category-page">
      <h2>All Inventory</h2>

      {/* Our new powerful search + filter + display logic */}
      <InventorySearch inventoryData={allItems} />
    </div>
  );
};

export default AllInventory;
