import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../api/api";
/* TOASTiFY REACT */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [author, setAuthor] = useState(""); //başlangıç değerleri
  const [bookName, setBookName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");

  //GÜncellenecek olan ürün
  const[currentProduct, setCurrentProdcut]=useState('')

  //!2.YONTEM
  const [formData, setFormData] = useState({
    author: "",
    bookName: "",
    publisher: "",
    genre: "",
    description: "",
    price: "",
    image: "",
    isbn: "",
    pageCount: "",
  });

  const myApi = api();
  const navigate = useNavigate()

  //Destructuring yapisi ile obje parçalama
  const { urunId } = useParams(); // useParams yapisi url deki dinamik yapiya ulaşmamızı sağlar
//   console.log("urunId", parseInt(urunId));

  useEffect(() => {
    myApi.get("/product").then((res) => {
    //   console.log(res.data);

      // const findProduct = res.data.find(item=> item.id == urunId) // == ile tip ayrımı yapmadan eşitliği kontrol eder
      //Düzenlenecek Ürünü bulma
      const findProduct = res.data.find((item) => item.id === parseInt(urunId)); // == ile tip ayrımı yapmadan eşitliği kontrol eder
    //   console.log("findProduct=>", findProduct);

      setCurrentProdcut(findProduct)

      setAuthor(findProduct.author);
      setBookName(findProduct.bookName);
      setPublisher(findProduct.publisher);
      setGenre(findProduct.genre);
      setDescription(findProduct.description);
      setPrice(findProduct.price);
      setImage(findProduct.image);
      setIsbn(findProduct.isbn);
      setPageCount(findProduct.pageCount);
      //2.YONTEM
    //   setFormData(findProduct)
    });
  }, []);

  //Değişiklieri yine apiye gönderip oradaki değerleri güncelleyirouz
  const handleEdit = (e) => {
    e.preventDefault()

    console.log('Submit olacak ürün',currentProduct)


    //Güncellemenin son hali ile nesneyi tanımlama
    const updateProduct = {
        ...currentProduct,
        bookName:bookName,
        author:author,
        publisher,
        genre,
        description,
        isbn,
        image,
        price,
        pageCount
    }
    console.log('Güncelleme',updateProduct)


    //apide guncelleme İşlemi
    myApi.put(`product/${updateProduct.id}`, updateProduct)
    .then(res=>{
        console.log(res)
        toast.success("Ürün başarıyla güncellendi! Yönlendiriliyorsunuz.");
        setTimeout(() => {//2sn sonra yapılacak işlem
            navigate('/booklist')
        }, 2000);
    })
  };

  return (
    <>
      <Header />

      <div className="addbook">
        <h1>Kitabı Düzenle</h1>
        <form onSubmit={handleEdit} className="addbook-form">
          <div>
            <span>ISBN:</span>
            <input
              value={isbn}
              type="text"
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div>
            <span>Yazar Adı:</span>
            <input
              value={author}
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <span>Kitap Adı:</span>
            <input
              value={bookName}
              type="text"
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div>
            <span>Yayınevi:</span>
            <input
              value={publisher}
              type="text"
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div>
            <span>Fiyat:</span>
            <input
              value={price}
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <span>Kitap Türü:</span>
            <input
              value={genre}
              type="text"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div>
            <span>Sayfa Sayısı:</span>
            <input
              value={pageCount}
              type="text"
              onChange={(e) => setPageCount(e.target.value)}
            />
          </div>
          <div>
            <span>
              Kitap Görseli: <small>(url olarak ekleyin!)</small>{" "}
            </span>
            <input
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <span>Açıklama:</span>
            <textarea
              value={description}
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
            GÜNCELLE
          </button>
        </form>
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
};

export default EditPage;
