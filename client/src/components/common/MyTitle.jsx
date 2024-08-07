function MyTitle({ text, textColor, className = "" }) {
  return (
    <div className="title-container">
      <h1 className={`fw-bold ${textColor} ${className}`}>{text}</h1>
    </div>
  );
}
export default MyTitle;
