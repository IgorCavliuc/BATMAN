import "./index.scss";
import { Input, InputMedia, MainTitle, Select } from "../../ui";
import { useEffect } from "react";
import { getAllCategories } from "../../server";
import CategoriesItem from "../../ui/CategoriesItem";
import { connect } from "react-redux";
import { Field, Formik, Form } from "formik";

import {
  setAllCategory,
  setCurrentCategory,
} from "../../Redux/AddPost/createPostSlice";

const AddPost = ({
  allCategory,
  currentCategory,
  setAllCategory,
  setCurrentCategory,
}: any) => {
  useEffect(() => {
    getAllCategories().then((res) => setAllCategory(res));
  }, []);

  const initialValues = currentCategory?.form?.reduce((acc: any, item: any) => {
    if (Array.isArray(item)) {
      item.forEach((subItem) => {
        acc[subItem.code] = "";
      });
    } else {
      acc[item.code] = "";
    }
    return acc;
  }, {});

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="batman-store__create-post">
      <div onClick={() => setCurrentCategory({})}>
        <MainTitle children={"Create post"} />
      </div>

      {Object.keys(currentCategory).length ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="batman-store__create-post_form">
            {currentCategory.form.map((item: any, i: number) => {
              return (
                <div key={i} className="batman-store__create-post_form-row">
                  {Array.isArray(item) ? (
                    <div className="batman-store__create-post_form-row-flex">
                      {item.map((subItem: any, j: number) => {
                        return subItem.type === "input" ? (
                          <div
                            key={j}
                            className="batman-store__create-post_form-row-flex-item"
                          >
                            <label htmlFor={subItem.code}>{subItem.name}</label>
                            {/*<Field*/}
                            {/*  id={subItem.code}*/}
                            {/*  name={subItem.code}*/}
                            {/*  type="text"*/}
                            {/*/>*/}

                            <Field
                              id={subItem.code}
                              name={subItem.code}
                              type={subItem.subtype ?? "text"}
                            />
                          </div>
                        ) : subItem.type === "textarea" ? (
                          <textarea
                            id={subItem.code}
                            name={subItem.code}
                          ></textarea>
                        ) : (
                          <div
                            key={j}
                            className="batman-store__create-post_form-row-flex-item"
                          >
                            <label htmlFor={subItem.code}>{subItem.name}</label>
                            <Field
                              name={subItem.code}
                              component={Select}
                              options={subItem?.option}
                              placeholder="Select an option"
                              valuesName={subItem.code}
                            />
                            {/*<select id="select">*/}
                            {/*  {subItem.option.map(*/}
                            {/*    (optionItem: any, k: number) => {*/}
                            {/*      return (*/}
                            {/*        <option key={k} value={optionItem.code}>*/}
                            {/*          <div className="optionClass">*/}
                            {/*            {optionItem.name}*/}
                            {/*          </div>*/}
                            {/*        </option>*/}
                            {/*      );*/}
                            {/*    }*/}
                            {/*  )}*/}
                            {/*</select>*/}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <label htmlFor={item.code}>{item.name}</label>
                      {item.type === "input" ? (
                        <Field
                          id={item.code}
                          name={item.code}
                          type={item.subtype ?? "text"}
                        />
                      ) : item.type === "textarea" ? (
                        <textarea id={item.code} name={item.code}></textarea>
                      ) : item.type === "attachment" ? (
                        <Field
                          name={item.code}
                          component={InputMedia}
                          valuesName={item.code}
                        />
                      ) : (
                        <Field
                          name={item.code}
                          component={Select}
                          options={item?.option}
                          placeholder="Select an option"
                          valuesName={item.code}
                        />
                      )}
                    </>
                  )}
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      ) : (
        <>
          <p>Choose one of the following categories</p>
          <h4>
            *Attention! You may not find a category in this list that matches
            the type of your ad. If you would like to post an ad that does not
            qualify for a specific topic, please report it to technical support.
          </h4>
          <div className="batman-store__create-post_categories-list">
            {(allCategory ?? []).map((item: any, i: number) => {
              return (
                <div onClick={() => setCurrentCategory(item)} key={i}>
                  <CategoriesItem key={i} data={item} />{" "}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allCategory: state?.createPostSlice?.allCategory,
  currentCategory: state?.createPostSlice?.currentCategory,
});

export default connect(mapStateToProps, {
  setCurrentCategory,
  setAllCategory,
})(AddPost);
