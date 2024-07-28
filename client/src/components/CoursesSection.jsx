import MyTitle from "./common/MyTitle";
import SectionMeta from "./common/SectionMeta";
import MyButton from "./common/MyButton";
import CourseCard from "./common/CourseCard";
import Container from "react-bootstrap/esm/Container";

function CoursesSection() {
  return (
    <div className="Courses-section-container py-5">
      <Container fluid className="">
        <div className="courses-cards-wrapper ">
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
        </div>
        <div className="explore-all-courses-wrapper p-3 px-md-6">
          <MyTitle
            text="Courses for every skill level and interest"
            textColor="primary"
          ></MyTitle>
          <SectionMeta className="pb-4">
            Focus on your specific goals with our guided courses, including
            academic test prep, business English, conversation practice, and
            more.
          </SectionMeta>
          <MyButton
            text="Explore all courses -->"
            buttonColor="secondary-1"
            textColor="primary-font-color"
          ></MyButton>
        </div>
      </Container>
    </div>
  );
}

export default CoursesSection;
