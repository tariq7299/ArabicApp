import NavBar from "../components/common/NavBar";
import HeroSection from "../components/HeroSection";
import LearnAboutTutorSection from "../components/LearnAboutTutorSection";
import SubscriptionPlansSection from "../components/SubscriptionPlansSection";
import FreeResourcesSection from "../components/FreeResourcesSection";
import CoursesSection from "../components/CoursesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";
import ScrollSpy from "react-ui-scrollspy";

function Home() {
  return (

    <main >
      {/* <ScrollSpy scrollThrottle="10" offsetTop="10"> */}
      <HeroSection></HeroSection>
      <LearnAboutTutorSection></LearnAboutTutorSection>
      <SubscriptionPlansSection ></SubscriptionPlansSection>
      <FreeResourcesSection></FreeResourcesSection>
      <CoursesSection></CoursesSection>
      <ContactUsSection></ContactUsSection>
      <TestimonialsSection></TestimonialsSection>
      {/* </ScrollSpy> */}
    </main>
  );
}

export default Home;
