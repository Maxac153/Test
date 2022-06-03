import Logo from "../img/book.png";

const Header = ({ ...props }) => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <h1 className="title">{props.title}</h1>
    </header>
  );
};

export default Header;
