import "./MyTitle.scss";

function MyTitle({ text, textColor, classNames = "" }) {
  return (
    <div className="title-container">
      <h1 className={`section-header ${textColor} ${classNames}`}>{text}</h1>
    </div>
  );
}
export default MyTitle;
