import { Container, Button, Table, Card } from "react-bootstrap";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../utils/orders";
import OrderModal from "../OrderModal/OrderModal";



const buyerMock = {
    name: "Gonzalo",
    phone: "2995553322",
    email: "gonzalo@hotmail.com"
};

const Cart = () => {
    const { cart, total, removeItem, clear } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();
    const handleRemove = (itemId) => {
        removeItem(itemId);
    }

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        };

        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
    }

    const showTable = cart.length > 0

    return (
        <Container className="cartContainer">
            {showTable && (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Desea remover?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><FontAwesomeIcon icon={faTrash} onClick={() => handleRemove(item.id)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3>Total: $ {total}</h3>
                    <Button variant="success" onClick={handleOpen}>Finalizar Compra</Button>
                </>
            )}
            {!showTable && (
                <>
                    <h3>Su carrtio está vacío, vamos a comprar!</h3>
                    <Link to="/">
                        <Button variant="success">Página principal</Button>
                    </Link>
                </>
            )}
            <div className="itemCartDetailContainer">
                <h4>Productos en el carrito</h4>
                <div className="itemCartDetail">
                    {cart.map((item) =>
                        <Card>
                            <Card.Img variant="top" src={item.pictureUrl} />
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Card.Text>
                                    ${item.price}
                                </Card.Text>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button onClick={() => handleRemove(item.id)}>
                                    Eliminar
                                </Button>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
            <OrderModal
                showModal={showModal}
                onClose={handleClose}
                onBuy={handleBuy}
                orderId={orderId}
            />
        </Container>
    );
}

export default Cart;