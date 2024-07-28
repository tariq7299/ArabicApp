import MyTitle from "./common/MyTitle";
import SubscriptionPlan from "./common/SubscriptionPlan";
import Container from "react-bootstrap/esm/Container";

function SubscriptionPlansSection() {
  return (
    <div className="subscription-plans-section-container section-gap py-5">
      <Container fluid className="p-3 px-md-6">
        <MyTitle
          text="Pick the plan that works for you"
          textColor="primary"
          className="text-center pb-4"
        ></MyTitle>
        <div className="subscription-plans-wrapper">
          <SubscriptionPlan></SubscriptionPlan>
          <SubscriptionPlan></SubscriptionPlan>
          <SubscriptionPlan></SubscriptionPlan>
        </div>
      </Container>
    </div>
  );
}

export default SubscriptionPlansSection;
