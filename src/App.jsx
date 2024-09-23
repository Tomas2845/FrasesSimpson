import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frases from "./componentes/Frases";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";

function App() {
  // guardar la api en un estado

  const [personaje, setPersonaje] = useState({});
  const [mostrarLoading, setmostrarLoading] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setmostrarLoading(true);
      // fecha api
      // solicitud GET(post, put, patch, delete) para traer datos y personajes de la API

      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      // verifico si me llego la respuesta
       if( respuesta.status === 200 ) {
        const datos = await respuesta.json();
      console.log(datos[0]);
      setPersonaje(datos[0]);

      // mostrar el componente

      setmostrarLoading(false);
       } else 
       {
        // mostrar mensaje al usuario final 
       }
      
    } catch (error) {
      console.error(error);
      // mostrar un mensaje al usuario final 
       
    }
  };

  return (
    <>
      <Container className="text-center my-4">
        <img src={logo} alt="" className="w-50" />
        {mostrarLoading ? (
          <div>
            <Commet color="#32cd32" size="medium" text="" textColor="" />
          </div>
        ) : (
          <Frases personaje={personaje}></Frases>
        )}

        <Button variant="warning" className="mt-3 " onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </Container>
    </>
  );
}

export default App;
