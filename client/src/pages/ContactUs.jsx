import Container from "react-bootstrap/esm/Container";
import MyTitle from "../components/common/MyTitle";
import SectionMeta from "../components/common/SectionMeta";

export default function ContactUs() {
  return (
    <main>
      <section className="mt-7 py-5">
        <Container fluid className="p-3 px-lg-6">
          <MyTitle
            text="Contact Us"
            className="fs-1 text-primary text-center"
          ></MyTitle>
          <SectionMeta className="text-primary pb-4 text-center">
            Any question or remarks? Just write us a message!
          </SectionMeta>
        </Container>
      </section>
    </main>
  );
}
