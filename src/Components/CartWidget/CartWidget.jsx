import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./CartWidget.css";

import { useContext } from "react"

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <MdOutlineAddShoppingCart
          style={{
            fontSize: "3rem",
            
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
