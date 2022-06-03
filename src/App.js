import React, { useState } from "react";
import "./App.css";
import Book from "./BookItem";
import Logo from "./img/book.png";

const App = () => {
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  //Добавление книги
  const handle = () => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => {
      localStorage.setItem(`${author}${name}`, [reader.result, author, name]);
      setBooks([Object.values(localStorage)]);
    });
  };

  const [books, setBooks] = useState([Object.values(localStorage)]);

  return (
    <div className="App">
      <h1 className="title">Добавить книгу</h1>
      <input type="file" onChange={(e) => setImg(e.target.files[0])}></input>
      <div className="add-book">
        <img src={Logo} alt="Logo" className="logo"></img>
        <div>
          <input
            className="input"
            placeholder="Автор книги"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="input"
            placeholder="Название книги"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={handle}>
            Добавить книгу
          </button>
        </div>
      </div>

      {Object.values(localStorage).map((book, index) => (
        <Book
          key={index}
          setBooks={setBooks}
          img={book.split(",")[0] + "," +book.split(",")[1]}
          author={book.split(",")[2]}
          name={book.split(",")[3]}
        ></Book>
      ))}
    </div>
  );
};
export default App;
