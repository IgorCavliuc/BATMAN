import { useEffect } from "react";
import { getAllProducts } from "../../server";
import { MainTitle, ProductCard } from "../../ui";
import { getAllProduct } from "../../Redux/Products/productSlice";
import { dataProductSlice } from "../../Redux/Products/productSlice";
import { connect } from "react-redux";
import { IProduct } from "../../type";
import { useLocation } from 'react-router-dom';

import './style/index.scss'

interface Props {
  items: IProduct[];
  getAllProduct:(e:any)=>void
}

const Product = ({ items, getAllProduct }: Props) => {
  const location = useLocation()

  useEffect(() => {
    getAllProducts(location?.pathname?.split('/')[1]).then((res) => getAllProduct(res));
  }, [getAllProduct, location?.pathname]);

  const title_name =  location?.pathname?.split('/')[1]?.split('_').join(' ').toUpperCase()
  return (
    <div className="batman-store_product-list">
       <MainTitle>{` According to your request, we found the following ${title_name}`}</MainTitle>
    <div className="batman-store_product-list-wrapper">
     

      {items?.map((item: IProduct) => (
        <ProductCard {...item} />
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: state?.productSlice?.items,
});

export default connect(mapStateToProps, {getAllProduct})(Product);
