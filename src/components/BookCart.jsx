import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function BookCart({ bookInfo }) {
  return (
    <div className="card">
      <img src={bookInfo.image} alt="" />

      <div className="card-details">
        <div className="card-details-title">
          <h5>{bookInfo.bookName}</h5>
          <p>$ {bookInfo.price}</p>
        </div>

        <button>
          <i>
            <FontAwesomeIcon icon={faCartShopping} />
          </i>
        </button>
      </div>
    </div>
  );
}

export default BookCart;
