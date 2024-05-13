import './MyButton.scss'

function MyButton({ text, buttonColor, textColor }) {

    return (
        <div className='button-container'>
            <button className={`section-action-button ${textColor} ${buttonColor}`}>{text}</button>
        </div>
    )

}

export default MyButton