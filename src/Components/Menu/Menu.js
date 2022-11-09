import { useState } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import sprite from '../../images/sprite.svg'
import s from './Menu.module.css'

export default function Menu() {
    const [isOpenMenu, setMenu] = useState(false);
    function toggleMenu(){
        setMenu(!isOpenMenu)
        console.log(isOpenMenu)
    }
    return(
                <div className={s.wrapper}>
            <Link to='/home' className={s.logo}>C</Link>
            <div className={s.menuWrapper}>
                {isOpenMenu ? (<div className={s.navWrapper}>
                <Navigation />
                <button className={s.menuBtn}>Career<svg width={13.66} height={13.66}><use href={sprite + "#icon-bold-arrow"} /></svg></button>
            </div>) : 
            (<div className={s.active}>
                <Navigation />
                <button className={s.menuBtn}>Career<svg width={13.66} height={13.66}><use href={sprite + "#icon-bold-arrow"} /></svg></button>
            </div>)
            }
            </div>
            <div onClick={toggleMenu}className={s.menuSvg} width={32} height={8}>
                <span></span>
                <span></span>
        </div>
            
        </div>
    )
}
