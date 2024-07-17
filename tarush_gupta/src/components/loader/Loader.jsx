import { useProgress } from "@react-three/drei"

import './loader.css'

export default function Loader() {
    const { progress } = useProgress()

    return <div className="loaderContainer">
        <div className={progress == 100? "loadWrapper hidden":"loadWrapper"}>
            <div className="loaderIconContainer">
                <img src="/icons/mongodb.png" alt="icon1" />
                <img src="/icons/express-js.webp" alt="icon2" />
                <img src="/icons/react.png" alt="icon3" />
                <img src="/icons/node.png" alt="icon4" />
                <span></span>
                <img src="/icons/android.png" alt="icon4" />
                <img src="/icons/java.png" alt="icon4" />
                <img src="/icons/firebase.png" alt="icon4" />
                <img src="/icons/kotlin.png" alt="icon4" />
            </div>
            <div className="loadingBar">
                <div className="loadingBarInner" style={{ width: `${progress.toFixed(2)}%` }}></div>
            </div>
            <h2 className="loadingText">
                {progress.toFixed(2)}% loaded
            </h2>
        </div>
    </div>
}