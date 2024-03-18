import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
    const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) =>
          item.id === dupeItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function numberOfBooks() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  function removeBook(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
    // console.log(book)
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfBooks={numberOfBooks()}/>
        {/* with (), the function executes here. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          {/* <Route path="/books/:id" element={<BookInfo books={books} cart={cart} changeQuantity={changeQuantity} /> } /> */}
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeBook={removeBook}
              />
            }
          />
          {/* cart={cart} changeQuantity={changeQuantity} */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
