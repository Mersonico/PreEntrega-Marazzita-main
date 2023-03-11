import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./CartWidget.css";

import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
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
