import { Link } from 'react-router-dom';
import s from './Navigation.module.css'
// import Home from '../Home/Home'

export default function Navigation() {
    return(
        <div className={s.menuWrapper}>
        <Link to='/activities' className={s.menuItem}>Activities</Link>
        <Link to='/technology' className={s.menuItem}>Technology</Link>
        <Link to='/rd' className={s.menuItem}>R&D</Link>
        <Link to='/community' className={s.menuItem}>Community</Link>
        </div>      
    )
}