import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [dni, setDni] = useState();
  const [gender, setGender] = useState();
  const [number,getNumber] = useState(0);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        console.log(lectura.results);
        setNombre(lectura.results[number].name);
        setImagen(lectura.results[number].image);
        setDni(lectura.results[number].status);
        setGender(lectura.results[number].species);
      })
      .catch(() => console.log("hay error"));
    }, [number]);
    
      const Generate = () => {
        getNumber(e=> e < 19 ? e + 1 : e = 0)
      };
    
    return (
    <div className="web">
      <h1>Rick and Morty character</h1>

      <Card array={[nombre, dni, imagen, gender]} />

      <button className="btn" onClick={Generate}>
        Generate
      </button>
    </div>
  );
}

export default App;
