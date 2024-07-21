import MyButton from "../common/MyButton/MyButton";
import MyTitle from "../common/MyTitle/MyTitle";
import SectionMeta from "../common/SectionMeta/SectionMeta";
import Container from "react-bootstrap/esm/Container";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <Container fluid className="px-md-5">
        <div className="hero-section__content">
          <MyTitle
            text="Online Arabic classes by top class tutors"
            textColor="secondary-font-color"
          ></MyTitle>

          <SectionMeta className="text-light">
            I am one of the best tutors ! and if you wanna learn more about me
            press on the button{" "}
          </SectionMeta>

          <MyButton
            text="Get started"
            buttonColor="secondary-color"
            textColor="primary-font-color"
          ></MyButton>
        </div>

        <div className="hero-section__overlay"></div>
      </Container>

      {/* <img  src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"></img> */}
    </div>
  );
}

export default HeroSection;
