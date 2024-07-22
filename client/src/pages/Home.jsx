import NavBar from "../components/common/NavBar";
import HeroSection from "../components/HeroSection";
import LearnAboutTutorSection from "../components/LearnAboutTutorSection";
import SubscriptionPlansSection from "../components/SubscriptionPlansSection";
import FreeResourcesSection from "../components/FreeResourcesSection";
import CoursesSection from "../components/CoursesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactUsSection from "../components/ContactUsSection";

function Home() {
  return (
    <>
      <NavBar></NavBar>

      <HeroSection></HeroSection>

      <LearnAboutTutorSection></LearnAboutTutorSection>

      <SubscriptionPlansSection></SubscriptionPlansSection>

      <FreeResourcesSection></FreeResourcesSection>

      <CoursesSection></CoursesSection>

      <TestimonialsSection></TestimonialsSection>

      <ContactUsSection></ContactUsSection>
    </>
  );
}

export default Home;
