import "./SubscriptionPlan.scss"
import SubscriptionPlanCard from "../SubscriptionPlanCard/SubscriptionPlanCard"
import SubscriptionPlanPrice from "../SubscriptionPlanPrice/SubscriptionPlanPrice"
import MyButton from "../MyButton/MyButton"

function SubscriptionPlan() {

    return (

        <div className="subscription-plan-wrapper">
            <SubscriptionPlanCard></SubscriptionPlanCard>
            <SubscriptionPlanPrice></SubscriptionPlanPrice>
            <MyButton text="Sign up" buttonColor="secondary-color" textColor="primary-font-color"></MyButton>
        </div>

    )
}

export default SubscriptionPlan