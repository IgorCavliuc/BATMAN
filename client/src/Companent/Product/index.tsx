import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { MainTitle, ProductCard } from "../../ui";
import { getAllProduct } from "../../Redux/Products/productSlice";
import { IProduct } from "../../type";
import { getAllProducts } from "../../server";
import './style/index.scss'

interface Props {
  items: IProduct[];
  getAllProduct:(e:any)=>void
}

const Product = ({ items, getAllProduct }: Props) => {
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProducts(location?.pathname?.split('/')[1]);
      getAllProduct(res);
    };
    fetchData();
  }, [getAllProduct, location?.pathname]);

  const title_name =  location?.pathname?.split('/')[1]?.split('_').join(' ').toUpperCase()



  return (
    <div className="batman-store_product-list">
       <MainTitle>{` According to your request, we found the following ${title_name}`}</MainTitle>
    <div className="batman-store_product-list-wrapper">
      {items?.map((item, i) => {
        return <ProductCard {...item} key={i}/>
      })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: state?.productSlice?.items,
});

export default connect(mapStateToProps, {getAllProduct})(Product);
