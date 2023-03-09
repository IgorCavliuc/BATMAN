export const getAllNavigate = () => {
  return fetch("http://localhost:3000/navigation")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllProducts = async (categorykey) => {
  const params = new URLSearchParams({
    category: categorykey,
  });
  try {
    const response = await fetch(`http://localhost:3000/products?${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
