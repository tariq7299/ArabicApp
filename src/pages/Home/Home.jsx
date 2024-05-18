import NavBar from "../../components/NavBar/NavBar"
import HeroSection from "../../components/HeroSection/HeroSection"
import LearnAboutTutorSection from "../../components/LearnAboutTutorSection/LearnAboutTutorSection"
import SubscriptionPlansSection from "../../components/SubscriptionPlansSection/SubscriptionPlansSection"
import "./Home.scss"

function Home() {

    return (
        <>
            <NavBar ></NavBar>

            <HeroSection></HeroSection>

            <LearnAboutTutorSection></LearnAboutTutorSection>

            <SubscriptionPlansSection></SubscriptionPlansSection>
        </>
    )
}

export default Home