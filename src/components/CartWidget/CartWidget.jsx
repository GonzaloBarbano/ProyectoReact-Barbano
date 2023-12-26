import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cart, getTotalItems} = useContext (CartContext);

  return (
    <Link to="../Cart"
    style={{
      display: cart.length > 0 ? "block" : "none",
      margin: "30px"
    }}>
    <div className="h-25">
      <HiShoppingCart color="Blue" size={30} />
    </div>
    </Link>
  );
};

export default CartWidget;