import MyButton from "./common/MyButton";
import MyTitle from "./common/MyTitle";
// import "./LearnAboutTutorSection.scss";
import SectionMeta from "./common/SectionMeta";
import Container from "react-bootstrap/esm/Container";

function LearnAboutTutorSection() {
  return (
    <div className="learn-about-tutor-container section-gap text-center py-5">
      <Container fluid className="p-3 px-lg-6">
        <MyTitle
          text="Learn more about your tutor !"
          className="text-primary"
        ></MyTitle>
        <SectionMeta className="pb-4">
          I am one of the best tutors ! and if you wanna learn more about me
          press on the button{" "}
        </SectionMeta>
        <MyButton
          text="About me"
          className="btn text-primary bg-secondary-1"
        ></MyButton>
      </Container>
    </div>
  );
}

export default LearnAboutTutorSection;
