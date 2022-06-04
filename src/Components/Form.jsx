import React, { useState } from "react";
import Button from "../Components/UI/button/Button";
import Input from "../Components/UI/input/Input";

const Form = ({ create }) => {
  const [book, setBook] = useState({ img: "", author: "", name: "" });

  //Добавление книги
  const handle = (e) => {
    e.preventDefault();
    let id = Date.now();
    const reader = new FileReader();
    reader.readAsDataURL(book.img);
    reader.addEventListener("load", () => {
      localStorage.setItem(`${id}`, [
        id,
        reader.result,
        book.author,
        book.name,
      ]);
      create([Object.values(localStorage)]);
    });
  };

  return (
    <form className="add__book">
      <Input
        type="file"
        onChange={(e) => setBook({ ...book, img: e.target.files[0] })}
      />
      <Input
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        className="input"
        placeholder="Автор книги"
      />
      <Input
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
