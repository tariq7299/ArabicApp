import Container from "react-bootstrap/esm/Container";
import SectionMeta from "./common/SectionMeta";
import MyButton from "./common/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

function ContactUsSection({ className }) {
  return (
    <div className="contact-us-section py-5">
      <Container fluid className="contact-us-section__container p-3 px-lg-6">
        <div className="contact-us-section__img-wrapper">
          <img
            src="src/assets/old-phone/old-phone-x1.jpg"
            alt=""
            className="contact-us-section__image"
          />
          <FontAwesomeIcon
            className="contact-us-section__icon envelop-icon text-secondary-1"
            icon={faEnvelopesBulk}
          />
          <FontAwesomeIcon
            className=" contact-us-section__icon comment-icon text-secondary-2"
            icon={faCommentDots}
          />
          <FontAwesomeIcon
            className="contact-us-section__icon location-icon text-secondary-2"
            icon={faLocationArrow}
          />
        </div>

        <div className="contact-us-section__content">
          <h2 className="fs-3 pb-2 fw-bold text-secondary-2">
            We are here to help
          </h2>

          <SectionMeta className="pb-4 text-light fs-6">
            Get in touch with our Customer Support Team with any questions you
            may have.
          </SectionMeta>
          <MyButton
            className="btn text-primary bg-secondary-1"
            text="Contact Us"
            buttonColor="secondary-1"
          ></MyButton>
        </div>
      </Container>
    </div>
  );
}

export default ContactUsSection;
