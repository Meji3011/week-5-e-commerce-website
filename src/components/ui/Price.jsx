import React from 'react';

function Price({originalPrice, salePrice}) {
  return (
    <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">${originalPrice.toFixed(2)}</span>$
            {salePrice.toFixed(2)}
          </>
        ) : (
          <>
          ${originalPrice.toFixed(2)}
          </>
        )}
        {/* Checks if the book has a sale price, if it does print both, if not only print original price. */}
      </div>
  )
}

export default Price;