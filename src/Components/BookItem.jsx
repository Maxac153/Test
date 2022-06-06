import Button from "./UI/button/Button";

const BookItem = ({ ...porps }) => {
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
        onClick={(e) => porps.remove(e.target.id)}
      >
        Удалить книгу
      </Button>
    </div>
  );
};

export default BookItem;
