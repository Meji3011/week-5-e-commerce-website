import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

function BookInfo({ books, addToCart, cart }) {
  // the { books } is being imported from App.jsx, where this page is being called.
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  // The + operator here converts the book.id, which is a string, into a number.

  function addBookToCart(book) {
    addToCart(book);
  }

  function BookInCart() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="boook__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima laudantium cupiditate minus architecto dignissimos
                    nulla explicabo sint recusandae quas facere totam excepturi
                    aspernatur ab in, enim temporibus, quaerat unde distinctio.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima laudantium cupiditate minus architecto dignissimos
                    nulla explicabo sint recusandae quas facere totam excepturi
                    aspernatur ab in, enim temporibus, quaerat unde distinctio.
                  </p>
                </div>
                {BookInCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>{" "}
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
