import { useProgress } from "@react-three/drei"

import './loader.css'

export default function Loader() {
    const { progress } = useProgress()

    return <div className={progress === 100? "loadWrapper hidden":"loadWrapper"}>
        <div className="loaderIconContainer">
            <img src="/icons/loader/mongodb.png" alt="mongodb-icon" />
            <img src="/icons/loader/express-js.webp" alt="express-js-icon" />
            <img src="/icons/loader/react.png" alt="react-icon" />
            <img src="/icons/loader/node.png" alt="node-icon" />
            <span></span>
            <img src="/icons/loader/android.png" alt="android-icon" />
            <img src="/icons/loader/java.png" alt="java-icon" />
            <img src="/icons/loader/firebase.png" alt="firebase-icon" />
            <img src="/icons/loader/kotlin.png" alt="kotlin-icon" />
        </div>
        <div className="loadingBar">
            <div className="loadingBarInner" style={{ width: `${progress.toFixed(2)}%` }}></div>
        </div>
        <h2 className="loadingText">
            {progress.toFixed(2)}% Loaded
        </h2>
    </div>
}