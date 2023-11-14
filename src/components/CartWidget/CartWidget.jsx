import { HiShoppingCart} from "react-icons/hi";

export const CartWidget = () => {
  return (
    <div className="h-25">
        <HiShoppingCart color="Blue" size={30}/>
        <strong>0</strong>
    </div>
  )
}
