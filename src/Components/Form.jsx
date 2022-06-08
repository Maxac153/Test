import React, { useState } from "react";
import Button from "../Components/UI/button/Button";
import Input from "../Components/UI/input/Input";
import Modal from "../Components/Modal";

const Form = ({ create }) => {
  const [book, setBook] = useState({ img: "", author: "", name: "" });

  const handle = (e) => {
    e.preventDefault();

    let id = Date.now();
    if (book.author !== "" || book.author !== "")
      try {
        const reader = new FileReader();
        reader.readAsDataURL(book.img);
        reader.addEventListener("load", () => {
          localStorage.setItem(`${id}`, JSON.stringify({
            id:id,
            img:reader.result,
            author:book.author,
            name:book.name,
          }));
          create({
            id: id,
            img: reader.result,
            author: book.author,
            name: book.name,
          });
        });
      } catch (err) {}

    setBook({ img: book.img, author: "", name: "" });
  };

  return (
    <form className="add__book">
      <Input
        type="file"
        onChange={(e) => setBook({ ...book, img: e.target.files[0] })}
      />
      <Input
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        className="input"
        placeholder="Автор книги"
      />
      <Input
        value={book.name}
        onChange={(e) => setBook({ ...book, name: e.target.value })}
        className="input"
        placeholder="Название книги"
      />
      <Button className="btn" onClick={handle}>
        Добавить книгу
      </Button>
    </form>
  );
};

export default Form;
