import "./SubscriptionPlansSection.scss"
import MyTitle from "../common/MyTitle/MyTitle"
import SubscriptionPlan from "../common/SubscriptionPlan/SubscriptionPlan"

function SubscriptionPlansSection() {

    return (

        <div className="subscription-plans-section-container section-space">
            <MyTitle text="Pick the plan that works for you" textColor="secondary-font-color"></MyTitle>
            <SubscriptionPlan></SubscriptionPlan>

        </div>

    )
}

export default SubscriptionPlansSection