import "./CoursesSection.scss"
import MyTitle from "../common/MyTitle/MyTitle"
import SectionMeta from "../common/SectionMeta/SectionMeta"
import MyButton from "../common/MyButton/MyButton"
import CourseCard from "../common/CourseCard/CourseCard"


function CoursesSection() {

    return (

        <div className="Courses-section-container ">
            <div className="courses-cards-wrapper ">
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>

            <div></div>
            <MyTitle text="Courses for every skill level and interest"></MyTitle>  
            <SectionMeta>Focus on your specific goals with our guided courses, including academic test prep, business English, conversation practice, and more.</SectionMeta>
            <MyButton text="Explore all courses -->" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>

    )
}

export default CoursesSection