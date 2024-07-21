import './loader.css'

export default function Loader({ progress }) {
    return <div className={progress == 100? "loadContainer hidden":"loadContainer"}>
        <div className="loadWrapper">
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
                <div className="loadingBarInner" style={{ width: `${progress}%` }}></div>
            </div>
            <h2 className="loadingText">
                {progress}% Loaded
            </h2>
        </div>
    </div>
}