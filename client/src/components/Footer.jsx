import Container from "react-bootstrap/esm/Container";
import MyButton from "./common/MyButton";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import KalimaLogoSvg from "./common/KalimaLogoSvg";

function Footer() {
  return (
    <footer className="footer bg-primary py-5">
      <Container className="footer__container p-3 px-md-6" fluid>
        <div className="row d-flex justify-content-center justify-content-md-between py-5 pb-md-8 ">
          <div className="footer__logo text-center col-9 col-md-2 pb-4 pb-md-0 text-light">
            <KalimaLogoSvg
              className={" kalima-logo--secondary-1-color "}
            ></KalimaLogoSvg>
          </div>
          <div className="footer__action-button col-12 col-md-3 justify-content-end">
            <MyButton
              text="Get started"
              className="btn button--large fs-5 text-primary bg-secondary-1"
            ></MyButton>
          </div>
        </div>

        <hr className="text-light mx-auto footer__divider"></hr>
        <div className="footer__social-media-icons text-center d-flex gap-5 justify-content-center py-3">
          <FaFacebookMessenger className="icon--big text-accent " />
          <FaFacebook className="icon--big text-accent" />
          <FaSquareXTwitter className="icon--big text-accent" />
          <FaSquareInstagram className="icon--big text-accent" />
        </div>

        <div className="text-center d-flex align-items-center justify-content-center flex-column flex-md-row pt-4 pb-3 text-light gap-3 gap-md-5">
          <p>Home</p>
          <p>Courses</p>
          <p>Contact Us</p>
          <p>Testimonials</p>
        </div>

        <div className="text-light text-center">
          <p>@2024 Copyright All rights received</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
