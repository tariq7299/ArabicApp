import MyButton from "./common/MyButton";
import MyTitle from "./common/MyTitle";
import SectionMeta from "./common/SectionMeta";
import Container from "react-bootstrap/esm/Container";
// import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container fluid className="hero-section__container p-3 px-md-5">
        <div className="hero-section__content  p-3 px-md-5">
          <MyTitle
            text="Online Arabic classes by top class tutors"
            className="fs-1 pb-3 text-secondary-1"
          ></MyTitle>

          <SectionMeta className="hero-section__meta text-secondary-1 pb-4 ">
            I am one of the best tutors ! and if you wanna learn more about
            measdfadf adsfadf adsf press on the button{" "}
          </SectionMeta>

          <MyButton
            text="Get started"
            className="btn button--large fs-5 bg-primary text-secondary-2"
          ></MyButton>
        </div>

        <div className="hero-section__overlay"></div>
      </Container>

      {/* <img  src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"></img> */}
    </div>
  );
}

export default HeroSection;
