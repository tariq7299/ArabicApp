import MyButton from '../common/MyButton/MyButton'
import MyTitle from '../common/MyTitle/MyTitle'
import './LearnAboutTutorSection.scss'
import SectionMeta from '../common/SectionMeta/SectionMeta'

function LearnAboutTutorSection() {

    return (
        <div className='learn-about-tutor-container section-gap'>
            
            <MyTitle text="Learn more about your tutor !" textColor="primary-color"></MyTitle>
            <SectionMeta>I am one of the best tutors ! and if you wanna learn more about me press on the button </SectionMeta>
            <MyButton text="About me" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>
    )
}

export default LearnAboutTutorSection