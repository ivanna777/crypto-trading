import chart from '../../images/Chart.png';
import sprite from '../../images/sprite.svg';
import s from './AboutUs.module.css';

export default function AboutUS() {
    return(
        <div className={s.wrapper}>
            <svg width={17} height={29}className={s.ovalSvg}><use href={sprite + "#icon-rectangle"} /></svg>
            <svg width={0} height={4}className={s.pointSvg}><use href={sprite + "#icon-point-in-rectangle"} /></svg>
            <h5 className={s.aboutH5}>About us</h5>
            <h2 className={s.headerH2}>Global technologies</h2>
            <div className={s.chartTextWrapper}>
                <img className={s.chartImg} src={chart} alt='chart'/>
                <div>
                     <h3>Level 1</h3>
                     <div className={s.colorSvgUl}>
                        <div className={s.svgWrapper}>                           
                            <svg width={16} height={23}><use href={sprite + "#icon-blue-arrow"} /></svg>
                            <svg width={16} height={23}><use href={sprite + "#icon-red-arrow"} /></svg>
                        </div>
                        <ul className={s.level}>
                        <li className={s.levelItem}>
                            Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.
                        </li>
                        <li className={s.levelItem}>
                            Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.
                        </li>
                     </ul>
                     </div>
                     
                <button className={s.startBtn}>Start now</button>
                </div>
               
            </div>
        </div>
    )
}