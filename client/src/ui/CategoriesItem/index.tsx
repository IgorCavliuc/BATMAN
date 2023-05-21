import "./index.scss";

interface CategoriesItemType {
  data: {
    _id: string;
    name: string;
    description: string;
    code: string;
  };
}
const CategoriesItem = ({ data }: CategoriesItemType) => {
  const { name, description, code } = data;
  return (
    <div className="batman-store--categories-item">
      <div className="batman-store--categories-item_container">
        <h1>{name}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default CategoriesItem;
