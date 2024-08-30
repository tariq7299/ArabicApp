function MyButton({ type, text, buttonColor, textColor, isDisabled, className }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`section-action-button ${textColor} ${buttonColor} ${className}`}
    >
      {text}
    </button>
  );
}

export default MyButton;
