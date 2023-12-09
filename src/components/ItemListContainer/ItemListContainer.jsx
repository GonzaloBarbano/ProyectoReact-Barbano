import { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getAllProducts, getProductsByCategory} from "../Products/Products";
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect (() => {
        if (categoryId) {
            getProductsByCategory (categoryId)
            .then((data) => {
                console.log("Data loaded:", data);
                setProducts(data);
            })
                .catch((error) => console.warn(error))
                
        } else {
            getAllProducts()
                .then ((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId]);

    return (
        <Container>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </Container>
    );
}

export default ItemListContainer;
