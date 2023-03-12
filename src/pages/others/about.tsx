import { Container } from "./styles";
export function AboutPage() {
  return (
    <center>
      <Container>
        <h1>The Ultimate Discord Bot for Esports Management</h1>
        <p>
          At Quotient, we are dedicated to revolutionizing the way esports communities manage their discord servers. We
          understand the challenges that come with organizing and managing tournaments, scrims, and other events, which is
          why we have designed the ultimate <a href={process.env.REACT_APP_GITHUB_LINK}>open-source discord bot</a>{" "}
          specifically for esports servers.
        </p>
        <p>
          Our goal is to empower esports communities by simplifying and streamlining the organization and management of
          events. With Quotient, you can effortlessly create and manage scrims, tournaments, and engage with your
          community members. Our multi-functional bot provides a comprehensive range of features, including automated
          registration opening & closing, automated slots management, and much more.
        </p>

        <p>
          At Quotient, we believe in transparency and simplicity, which is why our bot comes with close to no paywalls.
          However, we also offer premium plans to cover our hosting costs and provide the best possible service to our{" "}
          <u>13 million+ users and 13,000+ discord servers</u>.
        </p>

        <p>
          Our team is passionate about esports and dedicated to providing the best possible service to our users. We are
          constantly improving our bot and adding new features to make esports management even easier.
        </p>

        <p>
          Join the Quotient community today and experience the future of esports management. Thank you for choosing
          Quotient!
        </p>
      </Container>
    </center>
  );
}
