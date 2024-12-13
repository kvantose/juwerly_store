import "./BannerRegistration.css"
import img from "../../assets/bannerReg.png"
import CloseIcon from '@mui/icons-material/Close';

export default function BannerRegistration({ setBannerOpen }:
    { setBannerOpen: Function }) {
    return (
        <>
            <div className="bannerRegistration">
                <div className="bannerRegistration__container" style={{ backgroundImage: `url(${img})` }}>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "16px" }}>
                        <div className="bannerRegistration__content__container">
                            <div className="bannerRegistration__content">
                                <CloseIcon sx={{ color: "white", position: "absolute", right: "0px", top: "30px", cursor: "pointer" }} onClick={() => setBannerOpen(false)} />
                                <p className="bannerRegistration__title">Оставьте свою почту —<br></br> получите ключ к миру роскоши со скидкой!</p>
                                <input className="bannerRegistration__input" placeholder="Ваша почта" />
                                <button className="bannerRegistration__button">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}