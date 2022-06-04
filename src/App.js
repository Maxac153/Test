import "./App.css";
import React, { useState } from "react";
import Book from "./Components/BookItem";
import Header from "./Components/Header";
import Form from "./Components/Form";

const App = () => {
  const [books, setBooks] = useState([Object.values(localStorage)]);

  return (
    <div className="App">
      <Header title={"Список книг"} />
      <Form create={setBooks} />
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
