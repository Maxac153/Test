const BookItem = ({ img, setBooks, author, name }) => {
  //Удаление книги
  const remove = (id) => {
    localStorage.removeItem(id);
    setBooks([Object.values(localStorage)]);
  };

  return (
    <div className="item">
      <img className="img_book" src={img} alt="book" />
      <div>
        <p>
          Автор книги: <b>{author}</b>
        </p>
        <p>
          {" "}
          Название книги: <b>{name}</b>
        </p>
      </div>
      <button
        id={author + name}
        className="btn"
        onClick={(e) => remove(e.target.id)}
      >
        Удалить книгу
      </button>
    </div>
  );
};

export default BookItem;
