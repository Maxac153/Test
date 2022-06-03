const BookItem = ({img, setBooks, author, name }) => {
  //Удаление книги
  const remove = (id) => {
    localStorage.removeItem(id);
    setBooks([Object.values(localStorage)])
  };

  return (
    <div className="item">
      <img src={img} alt="book" />
      <p>Автор книги: <b>{author}</b></p>
      <p> Название книги: <b>{name}</b></p>
      <button id={author+name} className="btn" onClick={(e) => remove(e.target.id)}>
      Удалить книгу
    </button>
    </div>
  );
};

export default BookItem;
