import { useEffect, useState } from "react";
import { fetchProperties } from "./api";
import PropertyCard from "./components/PropertyCard";
import Filters from "./components/Filters";

export default function App() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    minPrice: "",
    maxPrice: "",
  });
  const [selectedProperty, setSelectedProperty] = useState(null);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties(filters);
      setProperties(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        🏠 Property Finder
      </h1>

      <Filters
        filters={filters}
        setFilters={setFilters}
        onSearch={loadProperties}
      />

      {selectedProperty ? (
        <div className="bg-white shadow-lg p-6 rounded-2xl max-w-xl mx-auto">
          <button
            onClick={() => setSelectedProperty(null)}
            className="text-sm text-gray-600 underline mb-3"
          >
            ← Back
          </button>
          <img
            src={selectedProperty.imageUrl || "https://via.placeholder.com/500"}
            alt={selectedProperty.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedProperty.name}</h2>
          <p className="text-gray-600">{selectedProperty.addressProperty}</p>
          <p className="text-indigo-600 text-xl font-semibold mt-2">
            ${selectedProperty.priceProperty}
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {properties.map((p) => (
            <PropertyCard
              key={p.idOwner}
              property={p}
              onSelect={setSelectedProperty}
            />
          ))}
        </div>
      )}
    </div>
  );
}
