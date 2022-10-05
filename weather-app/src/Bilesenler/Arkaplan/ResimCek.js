import yagmurlu from "../../Resimler/rainy.jpg";
import bulutlu from "../../Resimler/cloud.jpg";
import sisli from "../../Resimler/foggy.jfif";
import karli from "../../Resimler/karli.jpg";
import gokkusagi from "../../Resimler/rainbow-weather.jpg";
import firtinali from "../../Resimler/storm.png";
import gunesli from "../../Resimler/sunny.jpg";

function ResimCek({ durum }) {
  switch (durum) {
    case "Rain":
      return <img className="arkaplan-resim" src={yagmurlu} alt="yagmur"></img>;
    case "Clouds":
      return <img className="arkaplan-resim" src={bulutlu} alt="bulutlu"></img>;
    case "Mist":
      return <img className="arkaplan-resim" src={sisli} alt="sisli"></img>;
    case "Snow":
      return <img className="arkaplan-resim" src={karli} alt="karli"></img>;
    case "Drizzle":
      return (
        <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi"></img>
      );
    case "Storm":
      return (
        <img className="arkaplan-resim" src={firtinali} alt="firtinali"></img>
      );
    case "Clear":
      return <img className="arkaplan-resim" src={gunesli} alt="gunesli"></img>;
    default:
      return (
        <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi"></img>
      );
  }
}

export default ResimCek;
