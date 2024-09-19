import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";

function App() {
  return (
    <>
      <Container className="text-center my-4">
        <img src={logo} alt=""  className="w-50"/>
      </Container>
    </>
  );
}

export default App;
