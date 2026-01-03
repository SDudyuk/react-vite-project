function Button({ onClick, text, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
