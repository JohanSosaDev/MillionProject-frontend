export default function Filters({ filters, setFilters, onSearch }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl mb-4 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Name"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        className="border rounded-lg px-3 py-2 flex-1"
      />
      <input
        type="text"
        placeholder="Address"
        value={filters.address}
        onChange={(e) => setFilters({ ...filters, address: e.target.value })}
        className="border rounded-lg px-3 py-2 flex-1"
      />
      <input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        className="border rounded-lg px-3 py-2 w-32"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        className="border rounded-lg px-3 py-2 w-32"
      />
      <button
        onClick={onSearch}
        className="bg-indigo-600 text-white rounded-xl px-4 py-2 hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </div>
  );
}
