import "./Clear.css";
import "./App.css";
import React, { useState } from "react";
import Book from "./Components/BookItem";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Filter from "./Components/UI/filter/Filter";
import Modal from "./Components/UI/modal/Modal";

const App = () => {
  let list = Object.values(localStorage).reduce((books, book) => {
    books = [...books, JSON.parse(book)];
    return books;
  }, []);

  const [books, setBooks] = useState(list);
  const [filterSort, setFilterSort] = useState("");
  const [modal, setModal] = useState(false);

  //Сортировка
  const sortBooks = (sort) => {
    setFilterSort(sort);
    setBooks([...books].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  //Добавить книгу
  const createBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  //Удалить книгу
  const remove = (id) => {
    setBooks(books.filter((b) => b.id != id));
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}></Modal>
      <div className="wrapper">
        <Header title={"Список книг"} />
        <Form create={createBook} setModal={setModal}/>
        <Filter
          value={filterSort}
          sort={sortBooks}
          defaultValue={"Сортировка по"}
          options={[
            {
              value: "author",
              name: "Имени автора",
            },
            {
              value: "name",
              name: "Название книги",
            },
          ]}
        />

        {books.length !== 0 ? (
          books.map((book, index) => (
            <Book
              key={index}
              remove={remove}
              id={book.id}
              img={book.img}
              author={book.author}
              name={book.name}
            ></Book>
          ))
        ) : (
          <h2 className="no_books">Нет книг в списке</h2>
        )}
      </div>
    </div>
  );
};
export default App;
