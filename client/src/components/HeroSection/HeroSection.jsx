import MyButton from '../common/MyButton/MyButton'
import MyTitle from '../common/MyTitle/MyTitle'
import './HeroSection.scss'

function HeroSection() {

    return (
        <div className='hero-section-container section-gap '>
            
            <MyTitle text="Online Arabic classes by top class tutors" textColor="secondary-font-color"></MyTitle>
            <MyButton text="Get started" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>

            {/* <img  src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"></img> */}

        </div>
    )
}

export default HeroSection