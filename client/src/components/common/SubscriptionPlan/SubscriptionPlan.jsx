import "./SubscriptionPlan.scss";
import SubscriptionPlanCard from "../SubscriptionPlanCard/SubscriptionPlanCard";
import SubscriptionPlanPrice from "../SubscriptionPlanPrice/SubscriptionPlanPrice";
import MyButton from "../MyButton/MyButton";

function SubscriptionPlan() {
  return (
    <div className="subscription-plan-wrapper">
      <SubscriptionPlanCard></SubscriptionPlanCard>
      <div className="price-button-wrapper">
        <SubscriptionPlanPrice></SubscriptionPlanPrice>
        <MyButton
          text="Sign up"
          buttonColor="secondary-1"
          textColor="primary-font-color"
        ></MyButton>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
