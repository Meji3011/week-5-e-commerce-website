import React, { useState } from "react";
import Book from "../components/ui/Book";

function Books({ books: initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  // 1:14:20 in week 5 e-commerce follow along if I need a refresh in what setBooks is actually doing.

  function filterBooks(filter) {
    // console.log(filter); checks the filter output.
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    } else if (filter === "ALPHABETICAL") {
      setBooks(books.slice().sort((a, b) => a.title.localeCompare(b.title)));
    }
    // books.slice() clones the books data without mutating the original.
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  {/* onChange checks the event.target.value, which is what we put in the value for the options. */}
                  {/* For example when we change the sort to price, low to high. the event.target.value */}
                  {/* would be LOW_TO_HIGH, and we can write a function that if event.target.value === LOW_TO_HIGH */}
                  {/* We sort the books by price from low to high using the function. */}
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating, High to Low</option>
                  <option value="ALPHABETICAL">Alphabetical</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
