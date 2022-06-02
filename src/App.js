import React, { useState } from "react";
import "./App.css";
import Book from "./BookItem";
import Logo from "./img/book.png";

const App = () => {
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");

  //Добавление книги
  const handle = () => {
    localStorage.setItem(`${author}${name}`, [author, name]);
    setBooks([Object.values(localStorage)]);
  };

  const [books, setBooks] = useState([Object.values(localStorage)]);

  return (
    <div className="App">
      <h1 className="title">Добавить книгу</h1>
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
          author={book.split(",")[0]}
          name={book.split(",")[1]}
        ></Book>
      ))}
    </div>
  );
};
export default App;
