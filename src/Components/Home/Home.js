import scheme from '../../images/Scheme.png';
import schemePhone from '../../images/SchemePhone.png'
import sprite from '../../images/sprite.svg';
import s from './Home.module.css';

export default function Home(){
    return (
        <div className={s.wrapper}>
                            <div className={s.textWrapper}>
                    <h4>crypto trading</h4>
                    <h1>Engineers <span className={s.dividedHeader}>Meet <span className={s.blueHeader}> Traders__</span></span></h1>
                    <p>Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.</p>
                </div>
                <img className={s.schemeImg} src={scheme} alt='scheme'/>
                <img className={s.schemePhoneImg} src={schemePhone} alt='scheme'/>
            <button className={s.learnBtn}>Learn more
            <div className={s.svgWrapper}>
                <svg width={15} height={20}><use href={sprite + "#icon-blue-arrow-down"} /></svg>
                </div></button>
        </div>
    )
}