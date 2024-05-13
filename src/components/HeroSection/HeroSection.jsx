import './HeroSection.scss'
import MyButton from '../common/MyButton/MyButton'

function HeroSection() {

    // <MyTitle text="Online Arabic classes by top class tutors" textColor="secondary-font-color" backgroundColor="secondary-color"></MyTitle>
    return (
        <div className='hero-container'>
            <h1>This a hero section</h1>
            <MyButton text="Get started" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>
    )
}

export default HeroSection