import MyButton from "../common/MyButton/MyButton";
import MyTitle from "../common/MyTitle/MyTitle";
import SectionMeta from "../common/SectionMeta/SectionMeta";
import Container from "react-bootstrap/esm/Container";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container fluid className="hero-section__container px-md-5 px-4">
        <div className="hero-section__content px-4 px-md-5 ">
          <MyTitle
            text="Online Arabic classes by top class tutors"
            textColor="secondary-font-color"
            className="fs-1 pb-3"
          ></MyTitle>

          <SectionMeta className="hero-section__meta text-light pb-4">
            I am one of the best tutors ! and if you wanna learn more about
            measdfadf adsfadf adsf press on the button{" "}
          </SectionMeta>

          <MyButton
            text="Get started"
            buttonColor="secondary-1"
            textColor="primary-font-color"
            className="btn button--large fs-5"
          ></MyButton>
        </div>

        <div className="hero-section__overlay"></div>
      </Container>

      {/* <img  src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"></img> */}
    </div>
  );
}

export default HeroSection;
