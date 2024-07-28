import MyButton from "./common/MyButton";
import SectionMeta from "./common/SectionMeta";
import Container from "react-bootstrap/esm/Container";

function FreeResourcesSection() {
  return (
    <div className="free-resoureces-section-container pt-7 pb-5">
      <Container className="p-3 px-lg-6">
        <div className="free-resources-elements-wrapper bg-secondary-2">
          <div className="title-button-meta-wrapper">
            <h3>Try our free resources</h3>
            <div className="section-meta-wrapper">
              <SectionMeta className="pb-4">
                Get a taste of Arabic App with our most popular tools and
                guides. No subscription required.
              </SectionMeta>
            </div>
            <MyButton
              text="Join now"
              className="free-resources-button btn text-primary bg-secondary-1"
            ></MyButton>
          </div>
          <img
            src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftry_cambly.3d7c8d26.png&w=640&q=75"
            alt="Cambly Resources"
          ></img>
        </div>
      </Container>
    </div>
  );
}

export default FreeResourcesSection;
