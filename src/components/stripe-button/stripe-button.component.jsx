import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishibleKey =
    "pk_test_51Kal7vGrqOByQopqnGGvB2FVipbR0x0RSNLhfJauEogmNeRQgfZikYUy9BadJsfDYOYJRt7yFtoAMgOsPfBNlTJ500aGSsHcXM";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishibleKey}
    />
  );
};
export default StripeCheckoutButton;
