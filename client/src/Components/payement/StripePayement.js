import "../../App.css";
import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";
const MySwal = withReactContent(Swal);
function StripePayement() {
  const { total } = useParams();
  const publishableKey =
    "pk_test_51LPizIJrml64tMYM2dAoRXZlqSgH7CML3N2ZZWafwGevTlwxHKRLLsEg8kfSgg9ei9XnzbuOmA9MWk8Tjxw0GmAe00FKXdn58F";
  const [product] = useState({
    name: "Total",
    price: `${total}`,
  });
  const priceForStripe = product.price * 100;
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };
  const payNow = async (token) => {
    console.log(JSON.stringify(token));
    try {
      const response = await axios({
        url: "http://localhost:3001/api/payement",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2>Complete payment </h2>
      <p>{product.name}</p>
      <p>{product.price} TND</p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is ${product.price} TND`}
        token={payNow}
      />
    </div>
  );
}
export default StripePayement;
