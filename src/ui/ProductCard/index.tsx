import './style/index.scss'
import {IProduct} from "../../type";




const ProductCard = ({brand,
                            category,
                            description,
                            discountPercentage,
                            id,
                            images,
                            price,
                            rating,
                            stock,
                            thumbnail,
                            title,}:IProduct ) => {


            return <div key={id}>
                <p>{brand}</p>
                <p>{category}</p>
                <p>{description}</p>
                <p>{discountPercentage}</p>
                <img src={images} alt="image"/>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>{stock}</p>
                <p>{thumbnail}</p>
                <p>{title}</p>

            </div>



}

export default ProductCard