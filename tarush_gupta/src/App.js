import { useEffect, useState } from "react";
import DesktopExperience from "./DesktopExperience";
// import PhoneExperience from "./PhoneExperience";
import { consoleMsg } from "./data";

export default function App() {
    // const [isDesktop, setIsDesktop] = useState(true)
    useEffect(() => {
        console.clear()
        console.log(consoleMsg)
        console.log("%cHey there! I'm thrilled that you've opened the terminal. 🎉 I've prepared some fun functions for you to explore my website!", "color: #9bdfff; font-weight: bold; font-style: italic; background-color: #005017; font-size: 1.1rem;");
        console.group("commands");
        console.log(" - ls(): Lists all paths on my website");
        console.log(" - pwd(): Prints the current location");
        console.log(" - cd(path): Changes your current location to the specified path");
        console.log(" - touch('linkedin' || 'github' || 'insta'): to open my linkedin, github or insta profile");
        console.groupEnd();


        const handleResize = () => { console.log('need to set isDesktop!!') }
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    // return isDesktop? <DesktopExperience /> : <PhoneExperience />
    return <DesktopExperience />
}