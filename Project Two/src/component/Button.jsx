import styles from "../css/button.module.css";

const Button = (props) => {
  const { text, icon, isactive } = props;

  return (
    <button className={isactive ? styles.w_btn : styles.btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
