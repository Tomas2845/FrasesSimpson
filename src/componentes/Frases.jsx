import { Card } from "react-bootstrap";


const Frases = () => {

  return (
    <section>
      <img
        src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        alt="Nelson Muntz"
      />
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Nelson Muntz </Card.Title>
          <Card.Text>
            Shoplifting is a victimless crime, like punching someone in the
            dark.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frases;
