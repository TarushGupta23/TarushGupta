import { Html, useProgress } from "@react-three/drei"
export default function Loader() {
    const { progress } = useProgress()

    return <Html center>
        <div className={progress == 100? "container hidden":"container"}>
            <div className="iconContainer">
                <img src="/icons/icon1.png" alt="icon1" />
                <img src="/icons/icon2.png" alt="icon2" />
                <img src="/icons/icon3.png" alt="icon3" />
                <img src="/icons/icon4.png" alt="icon4" />
            </div>
            <div className="loadingBar">
                <div className="loadingBarInner" style={{ width: `${progress.toFixed(2)}%` }}></div>
            </div>
            <h2 className="text">
                {progress.toFixed(2)}% loaded
            </h2>
        </div>
    </Html>
}