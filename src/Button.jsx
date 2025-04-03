function Button({ children, type, onClickFn }) {
  return (
    <button className={`${type}`} onClick={onClickFn}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
