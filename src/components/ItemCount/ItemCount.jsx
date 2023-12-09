import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubstract = () => {
        setCount(count - 1);
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleCLick = () => onAdd(count);

    useEffect (() => {
        setCount(parseInt(initial));
    }, [initial]);

    return (
        <div className="itemCountContainer">
            <div>
                <Button variant="outline-danger" disabled={count <= 1} onClick={handleSubstract}>
                    -
                </Button>
                <h5>{count}</h5>
                <Button variant="outline-success" disabled={count >= stock} onClick={handleAdd}>
                    +
                </Button>
            </div>
            <div>
                <Button variant="success" disabled={stock <= 0} onClick={handleCLick}>
                    Agregar al Carrito
                </Button>
            </div>
        </div>
    );
};

export default ItemCount;
