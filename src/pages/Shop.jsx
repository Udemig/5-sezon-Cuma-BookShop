import BookCart from "../components/BookCart";
import Header from "../components/Header";
import Slider from "../components/Slider";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import MyTitle from "../components/MyTitle";
import Loading from "../components/Loading";
import BasketCart from "../components/BasketCart";
const Shop = () => {
  const [bookList, setBookList] = useState([]);
  const [basket,setBasket]=useState([])
  const [totalQuantity,setTotalQuantity]=useState(0)
  // daha önce oluşturulan base url i kullanmka için kendi fonksiyonumusta değişken döndryoruz
  const myserver = api();

  useEffect(() => {
    //kitab verilerini almak için product endpoint ine get metodu kullnarak isterek atyıoruz

    myserver.get("product").then((res) => {
      //gelen kitap verisini BookList state sine aktarıyoruz
      setBookList(res.data);
    });
  }, []);

  //console.log('list',list)

  //Eğer map gibi fonskiyonlarda süslü parantez içerisinde bir component kullnaılmak isteniyorsa mutlaka return () ifadesi içinde yazılmaldıır
  //2.Bir yol olarak arrow function map((item)=>()) şeklinde süslü parantez olmadan kullanılır





  const addToBasket = (product) => {
    const findProduct = basket.find((item) => item.id === product.id);
  
    if (!findProduct) {
      const newItem = {
        ...product,
        quantity: 1
      };
  
      const upTotalQuantity = totalQuantity + 1;
      setTotalQuantity(upTotalQuantity);
      const updatedBasket = [...basket, newItem];
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      localStorage.setItem("cartTotal", JSON.stringify(upTotalQuantity));
    } else {
      findProduct.quantity += 1;
      const upTotalQuantity = totalQuantity + 1;
      setTotalQuantity(upTotalQuantity);
      localStorage.setItem("basket", JSON.stringify([...basket]));
      localStorage.setItem("cartTotal", JSON.stringify(upTotalQuantity));
    }
  };
  


  if (bookList == null) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Slider />
      {/* <BasketCart/> */}
      <MyTitle title={"Ürünler"} />
      <div className="products">
        {bookList.map((book) => {



          return <BookCart onClick={()=>addToBasket(book)} bookInfo={book} />;
        })}
      </div>
    </>
  );
};

export default Shop;
