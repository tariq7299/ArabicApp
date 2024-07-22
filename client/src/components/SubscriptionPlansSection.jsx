import MyTitle from "./common/MyTitle";
import SubscriptionPlan from "./common/SubscriptionPlan";

function SubscriptionPlansSection() {
  return (
    <div className="subscription-plans-section-container section-gap">
      <MyTitle
        text="Pick the plan that works for you"
        textColor="primary"
      ></MyTitle>

      <div className="subscription-plans-wrapper">
        <SubscriptionPlan></SubscriptionPlan>
        <SubscriptionPlan></SubscriptionPlan>
        <SubscriptionPlan></SubscriptionPlan>
      </div>
    </div>
  );
}

export default SubscriptionPlansSection;