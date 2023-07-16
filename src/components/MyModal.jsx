import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BasketCart from "./BasketCart";

function MyModal({ children ,closeModal}) {
  return (
    <div className="modal">
      <button onClick={closeModal} className="modal-close">
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div className="modals">
        {children}

        <hr />

        <div className="modals-total">
          <p>Toplam</p>

          <p>500tl</p>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
