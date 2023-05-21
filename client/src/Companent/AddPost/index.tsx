import "./index.scss";
import { MainTitle } from "../../ui";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../server";
import CategoriesItem from "../../ui/CategoriesItem";
const AddPost = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((res) => setCategories(res));
  }, []);
  return (
    <div className="batman-store__create-post">
      <MainTitle children={"Create post"} />

      <div className="batman-store__create-post_categories-list">
        {categories?.map((item, i) => {
          return <CategoriesItem key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default AddPost;
