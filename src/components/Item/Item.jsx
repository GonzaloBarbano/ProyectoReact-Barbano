import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./item.css"

const Item = ({id, name, img, price, description}) => {
    return (
        <Card>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/item/${id}`}>
                    <Button>
                        Detalles de Producto
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};
export default Item;