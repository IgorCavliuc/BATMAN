import {useEffect} from "react";
import {getAllProducts} from "../../server";
import {ProductCard} from "../../ui";
import {useSelector} from "react-redux";
import { connect } from "react-redux";
import {actionProducts} from "../../Redux/Products/actions";


const Transport = () => {

    const Products = useSelector((state) => state);
    return(
        <div className='batman-store__container'>
            <ProductCard/>

        </div>
    )

}

export default Transport
