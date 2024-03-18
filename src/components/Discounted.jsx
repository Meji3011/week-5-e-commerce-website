import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Discounted <span className="purple">Books</span>
            </h2>
          </div>
          <div className="books">
            {books
            .filter((book) => book.salePrice != null)
            .slice(0,8)
            .map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
