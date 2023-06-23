import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../api/api";

/* TOASTiFY REACT */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [author, setAuthor] = useState(""); //başlangıç değerleri
  const [bookName, setBookName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");

  const myApi = api();

  const navigate = useNavigate(); //rotalara yönlendirme yapar

  const handleAdd = (event) => {
    console.log("handleAdd çalıştı");
    event.preventDefault();

    //eklenecek ürünün nesnesini oluşturma
    const newProduct = {
      id: new Date().getTime(), //Epoch zamanına göre 1 ocak 1970 bu yana geçen milisaniyeyi tanımlar
      bookName: bookName,
      author: author,
      publisher: publisher,
      genre, //genre: genre
      description, //description: description
      isbn, //isbn: isbn
      image, //image: image
      price, //price: price
      pageCount, //pageCount: pageCount
    };
    console.log("newProduct", newProduct);

    //Fake API kısmına json-server'a göndermek için post işlemi yapılır
    myApi
      .post("/product", newProduct)
      .then((res) => {
        console.log(res.data);
        toast.success("Ürün başarıyla eklendi! Yönlendiriliyorsunuz.");
        setTimeout(() => {
          navigate("/booklist");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />

      <div className="addbook">
        <h1>Kitap Ekle</h1>
        <form onSubmit={handleAdd} className="addbook-form">
          <div>
            <span>ISBN:</span>
            <input type="text" onChange={(e) => setIsbn(e.target.value)} />
          </div>
          <div>
            <span>Yazar Adı:</span>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <span>Kitap Adı:</span>
            <input type="text" onChange={(e) => setBookName(e.target.value)} />
          </div>
          <div>
            <span>Yayınevi:</span>
            <input type="text" onChange={(e) => setPublisher(e.target.value)} />
          </div>
          <div>
            <span>Fiyat:</span>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div>
            <span>Kitap Türü:</span>
            <input type="text" onChange={(e) => setGenre(e.target.value)} />
          </div>
          <div>
            <span>Sayfa Sayısı:</span>
            <input type="text" onChange={(e) => setPageCount(e.target.value)} />
          </div>
          <div>
            <span>
              Kitap Görseli: <small>(url olarak ekleyin!)</small>{" "}
            </span>
            <input type="text" onChange={(e) => setImage(e.target.value)} />
          </div>
          <div>
            <span>Açıklama:</span>
            <textarea
              cols="3"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={
              !isbn ||
              !author ||
              !bookName ||
              !publisher ||
              !genre ||
              !image ||
              !pageCount ||
              !description ||
              !price
            }
          >
            TAMAMLA
          </button>
        </form>
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
};

export default AddBook;
