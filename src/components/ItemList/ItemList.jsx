import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products }) => {
    return (
        <div className="itemList">
            {products.map((prod) => (
                <div key={prod.id}>
                    <Item {...prod}/>
                </div>
            ))}
        </div>
    );
};
export default ItemList;