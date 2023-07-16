import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import BasketCart from "./BasketCart";
const Header = () => {
  const [modal, setModal] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    //Local Storageden toplam ürün mikatarı alınır

    const storeTotalQuantity = localStorage.getItem("cartTotal");
    //Eğer ürün varsa totalQuantity statesi güncellenecek
    if (storeTotalQuantity) {
      setTotalQuantity(JSON.parse(storeTotalQuantity));
    }

    //Sepet verilerini local storageden alalım

    const storeBasket = localStorage.getItem("basket");

    //Eğer sepette ürün varsa basket statemizi güncelledik
    if (storeBasket) {
      setBasket(JSON.parse(storeBasket));
    }
  }, []);

  //console.log("sepet", basket);

  const adetiArttir = (artirilacakUrun) => {
    // console.log('+++')

    const filterCart = basket.find((item) => item.id === artirilacakUrun.id);

    //console.log(filterCart)

    filterCart.quantity += 1;
    //console.log(filterCart)

    const upTotal = totalQuantity + 1;
    setTotalQuantity(upTotal);
    localStorage.setItem("cartTotal", JSON.stringify(upTotal));
    localStorage.setItem("basket", JSON.stringify([...basket]));
  };

  const adetiAzalt = (azaltilacakUrun) => {
    // console.log('+++')

    const filterCart = basket.find((item) => item.id === azaltilacakUrun.id);

    //console.log(filterCart)

    filterCart.quantity -= 1;
    //console.log(filterCart)

    const upTotal = totalQuantity + 1;
    setTotalQuantity(upTotal);
    localStorage.setItem("cartTotal", JSON.stringify(upTotal));
    localStorage.setItem("basket", JSON.stringify([...basket]));
  };

  const handleDelete = (willDeleteProduct) => {
    //console.log('selam')

    const filterBasket = basket.find(
      (item) => item.id !== willDeleteProduct.id
    );

    setBasket(filterBasket);
    localStorage.setItem("basket", JSON.stringify(filterBasket));
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          Book<b>List</b>
        </a>
      </div>
      <div className="header-menu">
        <ul>
          {/* a etiketi sayfayi yeniler gider */}
          {/* Link etiketi sayfayı yenilemeden path ile  gider */}
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/booklist">Booklist</Link>
          </li>
        </ul>
      </div>
      <div className="header-process">
        <Link to="">Login</Link>
        <button onClick={() => setModal(true)}>
          <img
            src="https://img.icons8.com/?size=1x&id=36409&format=png"
            alt=""
          />
          <span>{totalQuantity}</span>
        </button>
        {modal === true
          ? (<MyModal>{basket &&
            basket.map((bookInfo) => {
              return (
                <BasketCart
                  urunSil={() => handleDelete(bookInfo)}
                  info={bookInfo}
                />
              );
            })}</MyModal>)
          : null}
      </div>
    </header>
  );
};

export default Header;
