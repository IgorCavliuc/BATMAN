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
      <p>Choose one of the following categories</p>
      <h4>
        *Attention! You may not find a category in this list that matches the
        type your ad. If you would like to post an ad that does not qualify for
        specific topic, please report it to technical support.
      </h4>
      <div className="batman-store__create-post_categories-list">
        {categories?.map((item, i) => {
          return <CategoriesItem key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default AddPost;
