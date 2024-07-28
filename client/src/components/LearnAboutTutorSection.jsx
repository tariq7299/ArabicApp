import MyButton from "./common/MyButton";
import MyTitle from "./common/MyTitle";
// import "./LearnAboutTutorSection.scss";
import SectionMeta from "./common/SectionMeta";

function LearnAboutTutorSection() {
  return (
    <div className="learn-about-tutor-container section-gap text-center ">
      <MyTitle
        text="Learn more about your tutor !"
        textColor="primary"
      ></MyTitle>
      <SectionMeta>
        I am one of the best tutors ! and if you wanna learn more about me press
        on the button{" "}
      </SectionMeta>
      <MyButton
        text="About me"
        buttonColor="secondary-1"
        textColor="primary-font-color"
      ></MyButton>
    </div>
  );
}

export default LearnAboutTutorSection;
