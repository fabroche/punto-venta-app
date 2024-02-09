import {ProductListProps} from "../types/ProductListProps";
import {Product} from "./Product";

interface Props {

}

export const ProductList: React.FC<Props> = ({}) => {
    return (
        <div
            className="productList-container"
        >
            <ul>
                <Product/>
            </ul>
        </div>
    );
};