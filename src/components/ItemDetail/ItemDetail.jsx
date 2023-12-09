import { useState, useContext} from "react";
import Item from "../Item/Item";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (value) => {
        setCount (value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return (
        <div className="itemDetailContainer">
            <Item product={product}/>
            {showItemCount && (<ItemCount
                initial={1}
                stock={10}
                onAdd={handleAdd}
                />)}
            {!showItemCount && (
                <Link className="btn-cart" to="/cart">
                    <Button variant="success">
                        Ver Carrito de Compras
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default ItemDetail;