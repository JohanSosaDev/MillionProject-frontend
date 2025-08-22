export default function PropertyCard({ property, onSelect }) {
  return (
    <div
      className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg cursor-pointer transition"
      onClick={() => onSelect(property)}
    >
      <img
        src={property.imageUrl || "https://via.placeholder.com/300"}
        alt={property.name}
        className="w-full h-40 object-cover rounded-xl mb-2"
      />
      <h3 className="text-lg font-bold">{property.name}</h3>
      <p className="text-gray-500">{property.address}</p>
      <p className="text-indigo-600 font-semibold">${property.price}</p>
    </div>
  );
}
