import React from "react";
import Price from "../components/ui/Price";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

function cart({ cart, changeQuantity, removeBook }) {
  function bookTotalPrice(book) {
    const price = book.salePrice !== null ? book.salePrice : book.originalPrice;
    return (price * book.quantity).toFixed(2);
  }

  function booksSubtotal(cart) {
    return cart.reduce((accumulator, book) => {
      const price =
        book.salePrice !== null ? book.salePrice : book.originalPrice;
      return accumulator + price * book.quantity;
    }, 0);
  }
  // Inside the function, the reduce method is used to iterate over each book object in the cart array.

  const subTotal = booksSubtotal(cart);
  const tax = subTotal * 0.15;
  const total = subTotal + tax;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            <Price
                              originalPrice={book.originalPrice}
                              salePrice={book.salePrice}
                            />
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeBook(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">${bookTotalPrice(book)}</div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                // If the cart is empty we render the cart__empty div.
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>
                    You don't have any <span className="purple">books</span> in
                    your cart!
                  </h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              // If the cart has something we render the total price div.
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${booksSubtotal(cart).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this :(`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default cart;
