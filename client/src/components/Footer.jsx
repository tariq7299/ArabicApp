import Container from "react-bootstrap/esm/Container";
import MyButton from "./common/MyButton";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-primary py-5">
      <Container className="footer__container" fluid>
        <div className="row d-flex justify-content-between py-5 pb-md-8">
          <div className="footer__logo text-center col-md-3 pb-4 pb-md-0 text-light">
            <h1>LOGO HERE</h1>
            <p>Slogan here and here and here</p>
          </div>
          <div className="footer__action-button text-center col-md-4">
            <MyButton
              text="Get started"
              buttonColor="secondary-1"
              textColor="priamry-font-color"
              className="btn button--large fs-5"
            ></MyButton>
          </div>
        </div>

        <hr className="text-light mx-auto footer__divider"></hr>
        <div className="footer__social-media-icons text-center d-flex gap-5 justify-content-center py-3">
          <FaFacebookMessenger className="icon--big text-black " />
          <FaFacebook className="icon--big text-black" />
          <FaSquareXTwitter className="icon--big text-black" />
          <FaSquareInstagram className="icon--big text-black" />
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
