import LernMore from '../LearnMore/LernMore';
import formulaPhone from '../../images/FormulaPhone.png';
import formula from '../../images/Formula.png';
import graph from '../../images/graph.png'
import s from './CryptoArticles.module.css';

export default function CryptoArticles() {
    return(
        <div className={s.wrapper} >
            <div className={s.box1}>
                {/* <div className={s.tryShadow1}></div> */}
                <div className={s.shadow11}></div>
                <div className={s.shadow12}></div>
                <img src={formulaPhone} alt='formula' className={s.formulaPhone}/>
                <img src={formula} alt='formula' className={s.formula}/>
                <div className={s.headerWrapper}>
                    <h5 className={s.spotText}>Spot & margin</h5>
                <h2>Trade <span className={s.text200}>200+</span> pairs with up<br /> to 10x leverage</h2>
                <LernMore />
                {/* <div className={s.tryShadow}></div> */}
                </div>
            </div>
            <div className={s.box2}>
                <div className={s.shadow31}></div>
                <div className={s.shadow32}></div>
                <div className={s.shadow33}></div>
                <h5>Derivatives</h5>
                <h3><span className={s.numbers}>40+</span> quarterly<br /> futures and<br /> contracts</h3>
                <LernMore />
            </div>
            <div className={s.box3}>
                <div className={s.shadow31}></div>
                <div className={s.shadow32}></div>
                <div className={s.shadow33}></div>
                <h5>Trading arena</h5>
                <h3>Prize pools<br /> worth up to <br /><span className={s.numbers}>USD 1,000,000</span></h3>
                <LernMore />
            </div>
            <div className={s.box4}>
                <div className={s.shadow41}></div>
                <div className={s.shadow42}></div>
                <div className={s.shadow43}></div>
                <div className={s.shadow44}></div>
                <div>
                   <h5>Mobile App</h5>
                <h3>Trade anytime,<br /> anywhere</h3>
                <LernMore /> 
                </div>
                <img className={s.graphImg}src={graph} width={328} height={235}alt='graphs' />
            </div>
        </div>
    )
}