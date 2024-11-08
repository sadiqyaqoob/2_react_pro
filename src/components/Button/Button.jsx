import styles from "./Button.module.css";
function Button({isOutline , icons ,text,...rest}) {
  return (
    <button
    {...rest} 
    className={ isOutline ? styles.outlin_btn : styles.primary_btn}>
      {icons}
      {text}
    </button>
  );
}

export default Button;
