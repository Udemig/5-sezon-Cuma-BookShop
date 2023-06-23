import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Shop from './pages/Shop'
import AddBook from "./pages/AddBook";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path='/addbook'  element={<AddBook />} />
          <Route path='/editbook/:urunId' element={<EditPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
