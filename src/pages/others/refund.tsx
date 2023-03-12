import { RefundContainer } from "./styles";
export function RefundPage() {
  return (
    <center>
      <RefundContainer>
        <h1>We Have a Strict No Refunds Policy!</h1>
        <p>
          We do not provide refunds for services purchased on our web dashboard or through our Discord Bot. By making a purchase, you acknowledge and
          agree to this policy.
        </p>

        <p>
          We recommend that you carefully read all service descriptions and consider your purchase decision before
          completing a transaction. If you have any questions or concerns about our products or services, please feel free
          to contact us through our <a href={process.env.REACT_APP_SUPPORT_SERVER_LINK}>Support Server</a> before making a
          purchase.
        </p>

        <p>
          If you experience any issues with our products or services, please contact us and we will do our best to resolve
          the issue to your satisfaction. However, please note that we do not provide refunds for any reason.
        </p>

        <p>
          We reserve the right to amend or modify this refund policy at any time without prior notice. By continuing to
          use our web dashboard after any modifications or updates to this policy, you agree to be bound by the updated
          refund policy.
        </p>
      </RefundContainer>
    </center>
  );
}
