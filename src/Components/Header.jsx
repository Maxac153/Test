import Logo from "../img/logo.png";

const Header = ({ ...props }) => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <h1 className="header__title">{props.title}</h1>
    </header>
  );
};

export default Header;
