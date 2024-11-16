import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const CheckOut = () => {
  const { cart, total } = useContext(CartContext);

  const handlePaymentSuccess = (details, data) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    console.log("Transaction Details:", details, data);
  };

  const initialPayPalOptions = {
    "client-id": "AcWhG3ck4X-hKGLRDwjO18Ve9ObjDSs36Xu9hJ4fLPlrBPwMAkKbOlaIwuaBK4IPSyNbZEVzpQpztn93",
    currency: "USD",
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-[26px] font-medium mb-4">Checkout</h1>
          <p className="text-gray-500">
            Confirm your order and complete the payment.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="flex-1 lg:pr-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="text-gray-500">$ {item.price.toFixed(2)}</p>
                    <p className="text-gray-500">Quantity: {item.amount}</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  Subtotal: $ {(item.price * item.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div className="lg:w-[30%] w-full bg-gray-100 p-6 rounded shadow-lg">
            <h2 className="text-xl font-medium mb-4">Payment Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Total:</p>
              <p className="text-lg font-medium">$ {total.toFixed(2)}</p>
            </div>

            <PayPalScriptProvider options={initialPayPalOptions}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total.toFixed(2), // Total amount to charge
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handlePaymentSuccess(details, data);
                  });
                }}
                onError={(err) => {
                  console.error("PayPal Checkout Error:", err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
