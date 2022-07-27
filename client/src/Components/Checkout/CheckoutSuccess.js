import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../../features/cartSlice";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart);
useEffect(() => {
dispatch(getTotals());
}, [cart, dispatch]);
const urlimage="http://localhost:3001/public/images/";
return (
<>
<div className="cart-container">
<h2>Checkout Successful</h2>
{cart.cartItems.length === 0 ? (
<div className="cart-empty">
<p>Your cart is currently empty</p>
</div>
) : (
<div>
<div className="titles">
<h3 className="product-title">Product</h3>
<h3 className="price">Price</h3>
<h3 className="quantity">Quantity</h3>
<h3 className="total">Total</h3>
</div>
<div className="cart-items">
{cart.cartItems &&
cart.cartItems.map((cartItem) => (
<div className="cart-item" key={cartItem._id}>
<div className="cart-product">
<img src={`${urlimage}${cartItem.couverture}`}
alt={cartItem.titre} />
<div>
<h3>{cartItem.titre}</h3>
<p>{cartItem.isbn}</p>
</div>
</div>
<div className="cart-product-price">{cartItem.prix}
TND</div>
<div className="cart-product-price">{cartItem.cartQuantity}</div>
<div className="cart-product-total-price">
{cartItem.prix * cartItem.cartQuantity} TND
</div>
</div>
))}
</div>
<div className="cart-summary">
<div className="cart-checkout">
<div className="subtotal">
<span>Subtotal</span>
<span className="amount">{cart.cartTotalAmount} TND</span>
</div>
<div>
<button>
{ <Link to={"/pay/" + cart.cartTotalAmount}
style={{"color":"yellow"}}>
Validate and Pay
</Link>
}
</button>
</div>
<div>
<button className="clear-btn"
onClick={()=>{dispatch(clearCart())}}>
Clear Cart
</button>
</div>
<div>
<div className="continue-shopping">
<Link to="/">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
<path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 
2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 
2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 
2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 
0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 
1 1z"/>
</svg>
</Link>
<Link to="/pdfcart">
<span>Print out PDF</span>
<svg
xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
fill="currentColor"
className="bi bi-arrow-left"
viewBox="0 0 16 16"
>
<path
fillRule="evenodd"
d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-
.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 
0 0 0 15 8z"
/>
</svg>
</Link>
<span>Continue Shopping</span>
</div>
</div>
</div>
</div>
</div>
)}
</div>
</>
);
};
export default CheckoutSuccess;
