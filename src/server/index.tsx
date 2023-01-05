export const dataNavigation = [
  { id: ' ', value: 'Home', img: '' },
  { id: 'transport', value: 'Transport', img: '' },
  { id: 'real_estate', value: 'Real Estate', img: '' },
  { id: 'technics', value: 'Technics', img: '' },
  { id: 'cloth', value: 'Cloth', img: '' },
  { id: 'appliances', value: 'Appliances', img: '' },
]

export const getAllProducts = () => {
  return fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((body) => body.products)
}
