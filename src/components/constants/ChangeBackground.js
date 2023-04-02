import arkaplan from '../photos/arkaplan.jpeg';
import bulutlu from '../photos/Bulutlu.jpeg';
import gunesli from '../photos/Güneşli.jpeg';
import karli from '../photos/Karlı.jpeg';
import yagmurlu from '../photos/Yağmurlu.jpeg';

function ChangeBackground({ status }) {
  switch (status) {
    case "Rain":
      return <img className='background-image' src={yagmurlu} alt="yagmurlu" />;
    case "Drizzle":
      return <img className='background-image' src={yagmurlu} alt="yagmurlu" />;
    case "Clear":
      return <img className='background-image' src={gunesli} alt="gunesli" />;
    case "Snow":
      return <img className='background-image' src={karli} alt="karli" />;
    case "Storm":
      return <img className='background-image' src={bulutlu} alt="firtinali" />;
    case "Clouds":
      return <img className='background-image' src={bulutlu} alt="bulutlu" />;
    default:
      return <img className='background-image' src={arkaplan} alt="gokkusagi" />;
  }
}

export default ChangeBackground;