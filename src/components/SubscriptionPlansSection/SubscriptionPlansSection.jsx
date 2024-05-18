import "./SubscriptionPlansSection.scss"
import MyTitle from "../common/MyTitle/MyTitle"
import SubscriptionPlan from "../common/SubscriptionPlan/SubscriptionPlan"

function SubscriptionPlansSection() {

    return (

        <div className="subscription-plans-section-container section-gap">
            <MyTitle text="Pick the plan that works for you" textColor="primary-color"></MyTitle>

        <div className="subscription-plans-wrapper">
                <SubscriptionPlan></SubscriptionPlan>
                <SubscriptionPlan></SubscriptionPlan>
                <SubscriptionPlan></SubscriptionPlan>
                <img src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftry_cambly.3d7c8d26.png&w=640&q=75" alt="Cambly Resources" width="240" height="240"></img>


              
            </div>
        </div>

    )
}

export default SubscriptionPlansSection