import React, { useState } from "react";
import "./index.css";

import Sonuc from "./Bilesenler/Sonuc";
import Arama from "./Bilesenler/Arama/AramaCubugu";
import Arkaplan from "./Bilesenler/Arkaplan";

function App() {
  const [havaDurumu, belirtHavaDurumu] = useState({});

  return (
    <section className="uygulama">
      <Arkaplan
        arkaplan={havaDurumu.weather && havaDurumu.weather[0].main}
      ></Arkaplan>
      <div id="baslik">Hava Durumu</div>
      <Arama belirtHavaDurumu={belirtHavaDurumu}></Arama>
      <Sonuc hava={havaDurumu}></Sonuc>
    </section>
  );
}

export default App;
