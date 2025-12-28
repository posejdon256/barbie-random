import logo from "./barbie.png";
import "./App.css";
import { useState } from "react";

const BARBIES = [
  `Barbie i 12 tańczących księżniczek`,
  `Barbie i Akademia Księżniczek`,
  `Barbie i diamentowy pałac`,
  `Barbie i magia pegaza`,
  `Barbie i magia tęczy`,
  `Barbie i podwodna tajemnica`,
  `Barbie i podwodna tajemnica 2`,
  `Barbie i sekret wróżek`,
  `Barbie i trzy muszkieterki`,
  `Barbie jako księżniczka i żebraczka`,
  `Barbie jako księżniczka wyspy`,
  `Barbie jako Roszpunka`,
  `Barbie Mariposa`,
  `Barbie przedstawia Calineczkę`,
  `Barbie w Dziadku do orzechów`,
  `Barbie w świecie mody`,
  `Barbie w Wigilijnej Opowieści`,
  `Barbie z Jeziora Łabędziego`,
  `Barbie z Wróżkolandii`,
  `Barbie: Syrenkolandia`,
  `Pamiętniki Barbie`,
];

const getBarbie = () => {
  const randomNumber = parseInt(Math.random() * BARBIES.length, 10);
  return BARBIES[randomNumber];
};

function App() {
  const [barbie, setBarbie] = useState("");
  const onClick = () => {
    setBarbie(getBarbie());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick} class="button">
          Wylosuj sobie film Barbie
        </button>
        {barbie ? <p>{barbie}</p> : ""}
      </header>
    </div>
  );
}

export default App;
