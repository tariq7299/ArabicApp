import Container from "react-bootstrap/esm/Container";
import MyTitle from "../components/common/MyTitle";
import SectionMeta from "../components/common/SectionMeta";
import { FaFacebookMessenger } from "react-icons/fa6";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaHeadset,
  FaEnvelopeOpen,
  FaLocationDot,
} from "react-icons/fa6";

export default function ContactUs() {
  return (
    <>
      <section className="contact-us-page__section mt-7 py-5">
        <Container fluid className="p-3 px-lg-6">
          <MyTitle
            text="Contact Us"
            className="display-4 text-primary text-center "
          ></MyTitle>
          <SectionMeta className="fs-5 text-primary pb-4 text-center">
            Any question or remarks? Just write us a message!
          </SectionMeta>

          <article className="row ">
            <div className="col-12 col-lg-5 bg-primary text-center text-lg-start p-3 p-lg-6 contact-us-page__contact-info">
              <h2 className="text-secondary-2 fw-bold">Contact information</h2>
              <p className="text-secondary-1 pb-4">
                {" "}
                We will be happy to receive your message!
              </p>

              <div className="row   d-flex gap-5 gap-lg-6 pb-6  ">
                <div className="col-12 row">
                  <div className="col-12 col-lg-1 d-flex justify-content-center justify-content-lg-start align-items-center pb-3 pb-lg-0">
                    <FaHeadset className="icon--medium text-secondary-1 " />
                  </div>{" "}
                  <p className="col-12 col-lg-11 d-flex justify-content-center justify-content-lg-start   text-secondary-4 text-center text-lg-start align-items-center ">
                    0201099133377
                  </p>
                </div>
                <div className="col-12 row ">
                  <div className="col-12 col-lg-1 d-flex justify-content-center justify-content-lg-start align-items-center pb-3 pb-lg-0">
                    <FaEnvelopeOpen className="icon--medium text-secondary-1  text-center text-lg-start " />
                  </div>{" "}
                  <p className="col-12 col-lg-11 text-secondary-4 d-flex justify-content-center justify-content-lg-start text-center text-lg-start align-items-center ">
                    tr.sar77an78@gmail.com
                  </p>
                </div>
                <div className="col-12 row">
                  <div className="col-12 col-lg-1 d-flex justify-content-center justify-content-lg-start align-items-center pb-3 pb-lg-0">
                    {" "}
                    <FaLocationDot className="icon--medium text-secondary-1 " />
                  </div>{" "}
                  <p className="col-12 col-lg-11 text-secondary-4 d-flex justify-content-center justify-content-lg-start text-center text-lg-start align-items-center ">
                    25 9th District, Ismael Wahbi, Nasr City, Cairo, Egypt
                  </p>
                </div>
              </div>
              <div className="text-center d-flex gap-5 justify-content-center py-3">
                <FaFacebookMessenger className="icon--big text-secondary-2 " />
                <FaFacebook className="icon--big text-secondary-2" />
                <FaSquareXTwitter className="icon--big text-secondary-2" />
                <FaSquareInstagram className="icon--big text-secondary-2" />
              </div>
            </div>

            <div className="col-12 col-lg-7 bg-secondary-1">
              <input type="text" />
              <p>testingnalgnda</p>
              <p>testingnalgnda</p>
              <input type="text" />
              <input type="text" />
              <p>testingnalgnda</p>
              <input type="text" />
              <input type="text" />
              <p>testingnalgnda</p>
              <input type="text" />
              <input type="text" />
              <p>testingnalgnda</p>
              <input type="text" />
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
