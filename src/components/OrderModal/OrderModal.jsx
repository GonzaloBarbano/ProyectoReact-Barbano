import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderModal.css";

const OrderModal = ({showModal, onClose, onBuy, orderId}) => {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar Compra</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese eMail"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese teléfono"/>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                {!orderId && (
                    <>
                        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                        <Button variant="success" onClick={onBuy}>Comprar</Button>
                    </>
                )}
                {orderId && (
                    <div className="footerOrderSuccess">
                        <Alert key="success" variant="success">Orden N°: {orderId}</Alert>
                        <Link to="/">
                            <Button variant="success">Regresar a página principal</Button>
                        </Link>
                    </div>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default OrderModal;