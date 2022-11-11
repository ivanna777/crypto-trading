import {Routes, Route} from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import FutureOfPlatform from './Components/FutureOfPlatform/FutureOfPlatform';
import CryptoArticles from './Components/CryptoArticles/CryptoArticles';
import Shadows from './Components/Shadows/Shadows';
import Orbits from './Components/Orbits/Orbits';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>

      <div className={s.shadowsWrapper}>
        <Shadows />
      </div>
      
      
      <div className={s.siteWrapper}>
      <Menu />
      <Home />
      <div className={s.orbitsWrapper}>
        <Orbits />
      </div>
      <AboutUs />
      <FutureOfPlatform />
      <CryptoArticles />
      </div>
      
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
      
    </div>
  );
}

export default App;
