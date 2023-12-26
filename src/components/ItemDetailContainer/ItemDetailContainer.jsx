import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [ loading, setLoading] = useState(true)
    const {itemId} = useParams();

    useEffect (()=>{
        setLoading (true)
        const docRef = doc(db, "prducts", tiemId)

        getDoc(docRef)
            .then(response => {
                const data= response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(error);
            })
            .finally(()=> {
                setLoading(false)
            })
    },[itemId])
    return (
        <Container>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...products}/>
        </Container>
    );
};

export default ItemDetailContainer;