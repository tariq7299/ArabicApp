import Container from "react-bootstrap/esm/Container";
import SectionMeta from "./common/SectionMeta/SectionMeta";
import MyButton from "./common/MyButton/MyButton";

function ContactUsSection({ className }) {
  return (
    <div className="contact-us-section">
      <Container fluid className="contact-us-section__container p-3">
        <div className="contact-us-section__img-wrapper">
          <img
            src="src/assets/old-phone/old-phone-x1.jpg"
            alt=""
            className="contact-us-section__image"
          />
        </div>

        <div className="contact-us-section__content">
          <h3 className="pb-2">We here to help</h3>
          <SectionMeta className="pb-4">
            Get in touch with our Customer Support Team with any questions you
            may have.
          </SectionMeta>
          <MyButton
            className="btn"
            text="Contact Us"
            buttonColor="secondary-color"
            textColor="primary-font-color"
          ></MyButton>
        </div>
      </Container>
    </div>
  );
}

export default ContactUsSection;
