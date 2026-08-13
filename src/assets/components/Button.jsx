function Button({ child = null, value, handleClick, style }) {
  return (
    <button className={style} onClick={handleClick}>
      {child}
      {value}
    </button>
  );
}

export default Button;
