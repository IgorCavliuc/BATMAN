export const getAllNavigate = () => {
  return fetch("http://localhost:3000/navigation")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllProducts = () => {
  return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((res) => res);
};
