import React from "react";
import sliderone from "../assets/sliderone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function BasketCart({info,adetiArttir,adetiAzalt,urunSil}) {
  //console.log('gelenProps kontrolu',info)
  return (
    <div className="cart">
      {/* Sepet kartının sol taraftaki kısmı*/}
      <div className="cart-left">
        <img src={info.image} alt="" />
        <div className="cart-left-details">
          <h2>{info.bookName}</h2>
          <span>{info.price  } $</span>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-right-buttons">
          <button onClick={adetiArttir} className="cart-right-buttons-up">+</button>
          <button onClick={adetiAzalt} className="cart-right-buttons-down">-</button>
        </div>

        <div className="cart-right-details">
          <button onClick={urunSil}>
            <FontAwesomeIcon
              className="cart-right-details-delete"
              icon={faXmark}
            />
          </button>

          <p>{(info.price * info.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default BasketCart;
