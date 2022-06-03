import Button from "./UI/button/Button";

const BookItem = ({ ...porps }) => {
  //Удаление книги
  const remove = (id) => {
    localStorage.removeItem(id);
    porps.setBooks([Object.values(localStorage)]);
  };

  return (
    <div className="item">
      <img className="img_book" src={porps.img} alt="book" />
      <div>
        <p>
          Автор книги: <b>{porps.author}</b>
        </p>
        <p>
          {" "}
          Название книги: <b>{porps.name}</b>
        </p>
      </div>
      <Button
        id={porps.id}
        className="btn"
        onClick={(e) => remove(e.target.id)}
      >
        Удалить книгу
      </Button>
    </div>
  );
};

export default BookItem;
