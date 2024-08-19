function MyButton({ type, text, buttonColor, textColor, className }) {
  return (
    <button
      type={type}
      className={`section-action-button ${textColor} ${buttonColor} ${className}`}
    >
      {text}
    </button>
  );
}

export default MyButton;
