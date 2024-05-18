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
            </div>
        </div>

    )
}

export default SubscriptionPlansSection