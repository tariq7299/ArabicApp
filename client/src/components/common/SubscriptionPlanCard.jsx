function SubscriptionPlanCard() {
  return (
    <div className="subscription-plan-card-wrapper">
      <div className="img-plan-header-wrapper">
        <img
          src="/src/assets/subscritptionPlanCardAvatar.png"
          alt="Plan avatar"
        ></img>
        <h2>Complete</h2>
      </div>

      <p className="benefits-header">For access to all of Kalima</p>

      <div className="benefits-wrapper">
        <p>OUr most comprehennsive experience</p>
        <p>OUr most comprehennsive experience</p>
        <p>OUr most comprehennsive experience</p>
      </div>
    </div>
  );
}

export default SubscriptionPlanCard;
