import { useEffect } from "react";
import { getAllProducts } from "../../server";
import { ProductCard } from "../../ui";
import { getAllTransport } from "../../Redux/Products/transportSlice";
import { dataTransportSlice } from "../../Redux/Products/transportSlice";
import { useSelector, useDispatch } from "react-redux";
import { IProduct } from "../../type";
import './style/index.scss'

const Transport = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(dataTransportSlice);

  useEffect(() => {
    getAllProducts().then((res) => dispatch(getAllTransport(res)));
  }, []);

  return (
    <div className="batman-store__container">
      {items?.map((item: IProduct) => (
        <ProductCard {...item} />
      ))}
    </div>
  );
};

export default Transport;
