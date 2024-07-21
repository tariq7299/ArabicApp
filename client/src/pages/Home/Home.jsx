import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import LearnAboutTutorSection from "../../components/LearnAboutTutorSection/LearnAboutTutorSection";
import SubscriptionPlansSection from "../../components/SubscriptionPlansSection/SubscriptionPlansSection";
import "./Home.scss";
import FreeResourcesSection from "../../components/FreeResourcesSection/FreeResourcesSection";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ContactUsSection from "../../components/ContactUsSection";

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
