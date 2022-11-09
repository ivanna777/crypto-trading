import s from './Shadows.module.css';

export default function Shadows() {
    return(
        <div>
            <div className={s.generalShadowWrapper}>
                <div className={s.generalShadow1}></div>
                <div className={s.generalShadow2}></div>
                <div className={s.generalShadow3}></div>
                <div className={s.generalShadow4}></div>
                <div className={s.generalShadow5}></div>
                <div className={s.generalShadow6}></div>
                <div className={s.generalShadow7}></div>
                <div className={s.generalShadow8}></div>

            </div>
            <div className={s.blueShadowsWrapper}>
                <div className={s.blueShadow1}></div>
                <div className={s.blueShadow2}></div>
                <div className={s.blueShadow3}></div>
                <div className={s.blueShadow4}></div>
            </div>
        </div>
    )
}