import {Routes, Route} from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import FutureOfPlatform from './Components/FutureOfPlatform/FutureOfPlatform';
import CryptoArticles from './Components/CryptoArticles/CryptoArticles';
import Shadows from './Components/Shadows/Shadows';
import Orbits from './Components/Orbits/Orbits';
import sprite from './images/sprite.svg'
import './App.css';

function App() {
  return (
    <div className='app'>

      <div className='shadowsWrapper'>
        <Shadows />
      </div>
      
      
      <div className='siteWrapper'>
      <Menu />
      <Home />
      <div className='orbitsWrapper'>
        <Orbits />
      </div>
      <AboutUs />
      <FutureOfPlatform />
      <CryptoArticles />
      </div>
      <svg width={50} height={50}><use href={sprite + "#icon-Line-3"} /></svg>
      
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
      
    </div>
  );
}

export default App;
