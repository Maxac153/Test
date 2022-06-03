import "./App.css";
import React, { useRef, useState } from "react";
import Book from "./Components/BookItem";
import Button from "./Components/UI/button/Button";
import Input from "./Components/UI/input/Input";
import Header from "./Components/Header";

const App = () => {
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [books, setBooks] = useState([Object.values(localStorage)]);

  //Добавление книги
  const handle = (e) => {
    let id = Date.now();
    e.preventDefault()
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => {
      localStorage.setItem(`${id}`, [id, reader.result, author, name]);
      setBooks([Object.values(localStorage)]);
    });
  };

  return (
    <div className="App">

      <Header title={"Список книг"}/>

      <form className="add__book">
        <Input type="file" onChange={(e) => setImg(e.target.files[0])}/>
        <Input
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
          placeholder="Автор книги"
        />
        <Input
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Название книги"
        />
        <Button className="btn" onClick={handle}>
          Добавить книгу
        </Button>
      </form>

      {Object.values(localStorage).map((book, index) => (
        <Book
          key={index}
          setBooks={setBooks}
          id={book.split(",")[0]}
          img={book.split(",")[1] + "," + book.split(",")[2]}
          author={book.split(",")[3]}
          name={book.split(",")[4]}
        ></Book>
      ))}
    </div>
  );
};
export default App;
