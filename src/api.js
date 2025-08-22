const API_URL = "https://localhost:5000/api/properties";

export async function fetchProperties(filters = {}) {
  const params = new URLSearchParams();

  if (filters.name) params.append("name", filters.name);
  if (filters.address) params.append("address", filters.address);
  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);

  const res = await fetch(`${API_URL}?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch properties");

  return res.json();
}
