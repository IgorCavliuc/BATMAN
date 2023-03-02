import { IProduct } from "../../type";
import './style/index.scss'

const ProductCard = ({
  brand,
  model,
  category,
  description,
  discount,
  id,
  images,
  price,
  rating,
  stock,
  thumbnail,
  title,
}: IProduct) => {
  return (
    <div className="batman-ui__card">
      <div className="batman-ui__card_image">
        <img src={images} alt="imageProduct" />
      </div>
      <div className="batman-ui__card_info">
      <h4>{brand} {model}</h4>
        <p>{title}</p>

      </div>
      <div className="batman-ui__card_price">
        <p><span>Price:</span> {price} MDL</p>
        {  discount?.value
? <h4>-{  discount?.value + discount?.type}</h4>:null}
      </div>
      <div className="batman-ui__card_more-info">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
