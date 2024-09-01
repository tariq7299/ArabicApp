import SubscriptionPlanCard from "./SubscriptionPlanCard";
import SubscriptionPlanPrice from "./SubscriptionPlanPrice";
import MyButton from "./MyButton";

function SubscriptionPlan() {
  return (
    <div className="subscription-plan-wrapper" >
      <SubscriptionPlanCard></SubscriptionPlanCard>
      <div className="price-button-wrapper py-1 px-2 text-center">
        <SubscriptionPlanPrice></SubscriptionPlanPrice>
        <MyButton
          text="Sign up"
          className="btn text-primary bg-secondary-1"
        ></MyButton>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
