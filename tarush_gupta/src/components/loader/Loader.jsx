import './loader.css'

export default function Loader({ progress }) {
    return <div className={progress == 100? "loadContainer hidden":"loadContainer"}>
        <div className="loadWrapper">
            <div className="loaderIconContainer">
                <img src="/icons/skills/mongodb.png" alt="mongodb-icon" />
                <img src="/icons/skills/express.png" alt="express-js-icon" />
                <img src="/icons/skills/react.png" alt="react-icon" />
                <img src="/icons/skills/node.png" alt="node-icon" />
                <span></span>
                <img src="/icons/skills/android.png" alt="android-icon" />
                <img src="/icons/skills/java.png" alt="java-icon" />
                <img src="/icons/skills/firebase.png" alt="firebase-icon" />
                <img src="/icons/skills/kotlin.png" alt="kotlin-icon" />
            </div>
            <div className="loadingBar">
                {/* <div className="loadingBarInner" style={{ width: `${progress}%` }}></div> */}
                <div className="loadingBarInner" style={{ width: `${progress}%` }}></div>
            </div>
            <h2 className="loadingText">
                {progress}% Loaded
            </h2>
        </div>
    </div>
}