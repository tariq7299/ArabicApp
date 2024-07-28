import Testimonial from "./common/Testimonial";
import Container from "react-bootstrap/esm/Container";

function TestimonialsSection() {
  return (
    <section className="testimonial-section-container py-5">
      <Container fluid className="test-wrapper p-3 px-lg-6">
        <Testimonial></Testimonial>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
