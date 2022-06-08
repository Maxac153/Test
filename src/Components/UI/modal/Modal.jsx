import cl from "./modal.module.css";
import Button from "../button/Button";

const Modal = ({ visible, setVisible }) => {
  const rootClasses = [cl.modal];
  if (visible) rootClasses.push(cl.active);

  const hide = () => {
    setVisible(false)
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.modalContent}>
        <p>Ошибка ввода</p>
        <Button onClick={hide}>Ок</Button>
      </div>
    </div>
  );
};

export default Modal;
