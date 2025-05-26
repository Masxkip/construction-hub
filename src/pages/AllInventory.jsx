import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";
import InventorySearch from "../components/InventorySearch";
import InventoryCard from "../components/InventoryCard";
import HeroHeader from "../components/HeroHeader";
import bgImage from "/images/c1.jpg"; 
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
    <>
      <HeroHeader
        title="All Inventory"
        subtitle="Learn More About Our Team and Mission"
        backgroundImage={bgImage}
      />
    <div className="category-page">
      {/* Our new powerful search + filter + display logic */}
      <InventorySearch inventoryData={allItems} />
    </div>
    </>
  );
};

export default AllInventory;
