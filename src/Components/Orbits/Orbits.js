import orbit1 from '../../images/Ellipse1.png';
import orbit2 from '../../images/Ellipse2.png';
import orbit3 from '../../images/Ellipse31.png';
import orbit4 from '../../images/Ellipse41.png';
import orbit3phone from '../../images/Ellipse3phone.png';
import orbit4phone from '../../images/Ellipse4phone.png';

import point1D from '../../images/point1D.png';
import point2D from '../../images/point2D.png';
import point1Ph from '../../images/point1Ph.png';
import point2Ph from '../../images/point2Ph.png';
// import sprite from '../../images/sprite.svg';
import s from './Orbits.module.css';

export default function Orbits(){
    return(
        <div className={s.orbits}>
            <img src={orbit1}  className={s.orbit1} alt='orbit' />
            <img src={orbit2} className={s.orbit2} alt='orbit' />
            <img src={orbit3phone} className={s.orbit3phone} alt='orbit' />
            <img src={orbit3} className={s.orbit3} alt='orbit' />
            <img src={orbit4phone} className={s.orbit4phone} alt='orbit' />
            <img src={orbit4} className={s.orbit4} alt='orbit' />

            <img src={point1D} className={s.point1D} alt='point' />
            <img src={point2D} className={s.point2D} alt='point' />
            <img src={point1Ph} className={s.point1Ph} alt='point' />
            <img src={point2Ph} className={s.point2Ph} alt='point' />

        </div>
    )
}