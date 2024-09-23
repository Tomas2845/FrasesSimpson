import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frases from "./componentes/Frases";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async() => {
    // fecha api
    // solicitud GET(post, put, patch, delete) para traer datos y personajes de la API 

    const respuesta = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes');
    const datos =  await respuesta.json()
    console.log(datos);
    
    
  };

  return (
    <>
      <Container className="text-center my-4">
        <img src={logo} alt="" className="w-50" />
        <Frases></Frases>
        <Button variant="warning" className="mt-3 ">
          Obtener Frase
        </Button>
      </Container>
    </>
  );
}

export default App;
