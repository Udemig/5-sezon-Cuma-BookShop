import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../api/api";
import Loading from "../components/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  // const myApi = api(); //useApi() kullanabilirdik ama biz kendi api fonksiyonumuzu Oluşturduk

  const myApi = api();

  useEffect(() => {
    myApi
      .get("product")
      .then((res) => {
        setTimeout(() => {
          setBookList(res.data);
        }, 700);
      })
      .catch((err) => console.log("HATA NEDIR?", err));
  }, []);

  console.log("BookList =>", bookList);

  //Ürün silme işlemi apiden
  const handleDelete = (itemId) => {
    console.log("handleDelete çalıştı", itemId);

    myApi
      .delete(`/product/${itemId}`)
      .then((res) => {
        //Başarıyla silme işlemi gereçkeleştiğinde yapılacak işlemler

        

        const silindiktenSonra = bookList.filter(item=>item.id !== itemId ) 
        console.log('silindiktenSonra',silindiktenSonra)
        setBookList(silindiktenSonra)
        toast.success(`${itemId} no lu idye ait ürün silindi!`);

      })
      .catch((err) => {
        //Silme işlemi sırasında hata durumunda yapılacak işlemler
        console.log(err);
      });
  };

  if (bookList.length === 0) {
    return <Loading />;
  }


  return (
    <>
      <Header />

      <div className="list">
        <h1>Kitap Listesi</h1>
        <div className="list-process">
          <Link to="/addbook" className="list-process-left">
            <img
              width={30}
              src="https://img.icons8.com/?size=512&id=SuPFstyooiwU&format=png"
              alt=""
            />
            Ürün Ekle
          </Link>
          <div className="list-process-right">
            <div className="input">
              <button>
                <img
                  width={30}
                  src="https://img.icons8.com/?size=512&id=7695&format=png"
                  alt=""
                />
              </button>
              <input type="text" placeholder="Listede Bul!" />
            </div>
            <select>
              <option value="Default">Varsayılan</option>
              <option value="Author">Yazara Göre</option>
              <option value="Book">Kitaba Göre</option>
              <option value="Publisher">Yayınacıya Göre</option>
              <option value="Genre">Türe Göre</option>
              <option value="Stock +">Stoka Göre Artan</option>
              <option value="Stock -">Stoka Göre Azalan</option>
              <option value="Price +">Fiyata Göre Artan</option>
              <option value="Price -">Fiyata Göre Azalan</option>
              <option value="Page Count +">Sayfaya Göre Artan</option>
              <option value="Page Count -">Sayfaya Göre Azalan</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>ISBN</th>
              <th>Yazar</th>
              <th>Kitap Adı</th>
              <th>Yayıncı</th>
              <th>Tür</th>
              <th>Stok</th>
              <th>Fiyat</th>
              <th>Sayfa</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((item, index) => {
              // console.log(`${index} ait ürün bilgisi`,item)
              const {
                bookName,
                author,
                publisher,
                genre,
                isbn,
                image,
                price,
                pageCount,
                count,
              } = item;
              return (
                <tr key={index}>
                  <th></th>
                  <th>{isbn}</th>
                  <th>{author}</th>
                  <th>{bookName}</th>
                  <th>{publisher} </th>
                  <th>{genre}</th>
                  <th>{count}</th>
                  <th>{price}</th>
                  <th>{pageCount}</th>
                  <th>
                    <Link to={`/editbook/${item.id}`}>
                      {" "}
                      {/* ${item.id} <=> :urunId, useParams ile bu dinamik değere ulaşılır */}
                      <img
                        src="https://img.icons8.com/?size=512&id=12082&format=png"
                        alt=""
                      />
                    </Link>
                    <img
                      onClick={() => handleDelete(item.id)}
                      src="https://img.icons8.com/?size=1x&id=102550&format=png"
                      alt=""
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
};

export default BookList;
