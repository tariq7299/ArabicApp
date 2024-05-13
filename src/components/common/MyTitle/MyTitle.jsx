import './MyTitle.scss'

function MyTitle({ text, textColor }) {

    return (
        <div className="title-container">
            <h1 className={`section-header ${textColor}`}>{text}</h1>
        </div>
    )


}
export default MyTitle