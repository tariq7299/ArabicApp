import "./CoursesSection.scss"
import MyTitle from "../common/MyTitle/MyTitle"
import SectionMeta from "../common/SectionMeta/SectionMeta"
import MyButton from "../MyButton/MyButton"

function CoursesSection() {

    return (

        <div className="Courses-section-container">
            {/* Create the courses cards */}
            <MyTitle text="Courses for every skill level and interest"></MyTitle>  
            <SectionMeta>Focus on your specific goals with our guided courses, including academic test prep, business English, conversation practice, and more.</SectionMeta>
            <MyButton text="Explore all courses -->" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>

    )
}

export default CoursesSection