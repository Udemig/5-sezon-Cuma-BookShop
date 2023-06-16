import React from "react";
import Header from "../components/Header";

const AddBook = () => {
  return (
    <>
      <Header />

      <div className="addbook">
        <h1>Kitap Ekle</h1>
        <form className="addbook-form">
          <div>
            <span>ISBN:</span>
            <input type="text" />
          </div>
          <div>
            <span>Yazar Adı:</span>
            <input type="text" />
          </div>
          <div>
            <span>Kitap Adı:</span>
            <input type="text" />
          </div>
          <div>
            <span>Yayınevi:</span>
            <input type="text" />
          </div>
          <div>
            <span>Fiyat:</span>
            <input type="text" />
          </div>
          <div>
            <span>Kitap Türü:</span>
            <input type="text" />
          </div>
          <div>
            <span>Kitap Görseli:</span>
            <input type="text" />
          </div>
          <div>
            <span>Açıklama:</span>
            <textarea name="" id="" cols="3" rows="5"></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
