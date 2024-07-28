import NavBar from "../components/common/NavBar";
import HeroSection from "../components/HeroSection";
import LearnAboutTutorSection from "../components/LearnAboutTutorSection";
import SubscriptionPlansSection from "../components/SubscriptionPlansSection";
import FreeResourcesSection from "../components/FreeResourcesSection";
import CoursesSection from "../components/CoursesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <NavBar></NavBar> */}

      <HeroSection></HeroSection>

      <LearnAboutTutorSection></LearnAboutTutorSection>

      <SubscriptionPlansSection></SubscriptionPlansSection>

      <FreeResourcesSection></FreeResourcesSection>

      <CoursesSection></CoursesSection>

      <ContactUsSection></ContactUsSection>

      <TestimonialsSection></TestimonialsSection>

      {/* <Footer></Footer> */}
    </>
  );
}

export default Home;
