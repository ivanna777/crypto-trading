import TradinfScheme from '../TradingScheme/TradingScheme';
import s from './FutureOfPlatform.module.css'

export default function FutureOfPlatform() {
    return(
        <div className={s.wrapper}>
            <TradinfScheme />
            <div>
                <h2>The future <span className={s.textOf}>of</span><br />Cryptocurrency <br /> trading <span className={s.textPlatform}>platform</span></h2>
                <p className={s.text}>Take advantage of time and sales, futures pread orders and depth trader — plus, trade directly from charts.</p>
                <a className={s.lernBtn} href='learnBtn'>Learn more</a>
            </div>
        </div>
    )
}