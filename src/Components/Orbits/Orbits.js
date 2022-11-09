import orbit1 from '../../images/Ellipse1.png';
import orbit2 from '../../images/Ellipse2.png';
import orbit3 from '../../images/Ellipse31.png';
import orbit4 from '../../images/Ellipse41.png';
import orbit3phone from '../../images/Ellipse3phone.png';
import orbit4phone from '../../images/Ellipse4phone.png';
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
        </div>
    )
}