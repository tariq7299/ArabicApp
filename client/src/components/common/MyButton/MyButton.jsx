import "./MyButton.scss";

function MyButton({ text, buttonColor, textColor, className }) {
  return (
    <div className="button-container">
      <button
        className={`section-action-button ${textColor} ${buttonColor} ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default MyButton;
