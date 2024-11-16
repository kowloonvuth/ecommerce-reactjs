import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ViewCart = () => {
  const { cart, total, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-[26px] font-medium mb-4">Your Shopping Cart</h1>
          <p className="text-gray-500">
            Review your selected products. You can add more or remove items below.
          </p>
        </div>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-500">Your cart is currently empty.</p>
            <Link
              to="/"
              className="inline-block mt-4 bg-primary text-white py-3 px-6 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-start">
            {/* Cart Items */}
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
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded text-black"
                    >
                      -
                    </button>
                    <span className="px-4">{item.amount}</span>
                    <button
                      onClick={() => addToCart(item, item.id)}
                      className="bg-gray-200 px-3 py-1 rounded text-black"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-500">
                    Subtotal: $ {(item.price * item.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-[30%] w-full bg-gray-100 p-6 rounded shadow-lg">
              <h2 className="text-xl font-medium mb-4">Cart Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500">Total:</p>
                <p className="text-lg font-medium">$ {total.toFixed(2)}</p>
              </div>
              <Link
                to="/checkout"
                className="block bg-primary text-white py-3 px-6 rounded text-center mb-4"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/"
                className="block bg-gray-200 text-black py-3 px-6 rounded text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewCart;
