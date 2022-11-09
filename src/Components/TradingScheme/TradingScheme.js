import lineShadow1 from '../../images/lineShadow1.svg';
import arrow from '../../images/arrowShadow.svg';
import lineShadow2 from '../../images/lineShadow2.svg';
import sprite from '../../images/sprite.svg';
import s from './TradingScheme.module.css';

export default function TradingScheme(){
    return(
        <div className={s.wrapper}>
            <div className={s.box1}>
                <div className={s.adWrapper}>
                <p className={s.boxItem}>Artificial Intelligence</p>
                <p className={s.boxItemStorage}>Storage Networks</p>
                </div>
                <p className={s.boxItemPP}>P2P Networks</p>           
            </div>
            <div className={s.box2}>
                <p className={s.boxItem}>Public Data</p>
                <p className={s.boxItemPrivate}>Encrypted Private<br /> Data *</p>
            </div>
            <div className={s.box3}>
                <div className={s.adWrapper2}>
                    <svg className={s.triangleSvg}><use widht={28} height={31} href={sprite + "#icon-triangle"} /></svg>
                <p className={s.note}>Easy to use digital service and exclusive personal service for our active traders</p>
                </div>
                
                <div className={s.adWrapper3}>
                    <p className={s.boxItem}>Indexing</p>
                <p className={s.boxItem}>API</p>
                <img src={lineShadow1} className={s.lineShadow1} alt='lineShadow1'/>
                <img src={arrow} className={s.arrow1} alt='arrow1'/>
                <img src={lineShadow2} className={s.lineShadow2} alt='lineShadow2'/>
                <img src={arrow} className={s.arrow2} alt='arrow2'/>
                <p className={s.note2}>Consumers</p>
                </div>
            </div>
        </div>
    )
}