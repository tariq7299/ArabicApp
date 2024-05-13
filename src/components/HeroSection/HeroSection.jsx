import MyButton from '../common/MyButton/MyButton'
import MyTitle from '../common/MyTitle/MyTitle'
import './HeroSection.scss'

function HeroSection() {

    return (
        <div className='hero-container'>
            
            <MyTitle text="Online Arabic classes by top class tutors" textColor="secondary-font-color"></MyTitle>
            <MyButton text="Get started" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>
    )
}

export default HeroSection