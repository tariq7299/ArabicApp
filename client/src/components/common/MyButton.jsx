function MyButton({ text, buttonColor, textColor, className }) {
  return (
    <button
      className={`section-action-button ${textColor} ${buttonColor} ${className}`}
    >
      {text}
    </button>
  );
}

export default MyButton;
