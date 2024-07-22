import MyTitle from "./common/MyTitle";
import SectionMeta from "./common/SectionMeta";
import MyButton from "./common/MyButton";
import CourseCard from "./common/CourseCard";

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

      <div className="explore-all-courses-wrapper section-gap">
        <MyTitle
          text="Courses for every skill level and interest"
          textColor="primary"
        ></MyTitle>
        <SectionMeta>
          Focus on your specific goals with our guided courses, including
          academic test prep, business English, conversation practice, and more.
        </SectionMeta>
        <MyButton
          text="Explore all courses -->"
          buttonColor="secondary-1"
          textColor="primary-font-color"
        ></MyButton>
      </div>
    </div>
  );
}

export default CoursesSection;