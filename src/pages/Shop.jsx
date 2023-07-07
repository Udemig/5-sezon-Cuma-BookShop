import BookCart from "../components/BookCart";
import Header from "../components/Header";
import Slider from "../components/Slider";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import MyTitle from "../components/MyTitle";
import Loading from "../components/Loading";
const Shop = () => {
  const [bookList, setBookList] = useState([]);
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

  if (bookList == null) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Slider />
      <MyTitle title={"Ürünler"} />
      <div className="products">
        {bookList.map((book) => {



          return <BookCart bookInfo={book} />;
        })}
      </div>
    </>
  );
};

export default Shop;
