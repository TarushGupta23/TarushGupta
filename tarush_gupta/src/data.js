import { Vector3 } from "three";

const homeCamera = [-0.35, 17.6, 52.7]
function shiftCenter(pos) {
    return new Vector3(pos[0] - homeCamera[0], pos[1] - homeCamera[1], pos[2] - homeCamera[2])
}
const rawPath = [
    {  // mainPos - 0
        position: [-0.35, 13 + 4.6, 52.7], 
        rotation: [-.33, 0, 0]
    }, { // cupView - 1
        position: [4.605, 1.4, 9.45], 
        rotation: [-0.1, 0, 0], 
    }, { // resume - 2
        position: [-0.415, 2.95, 6.74], 
        rotation: [-0.2, .66, 0.1], 
    }, { // laptop - 3
        position: [1.4, -1.7 + 4.6, 11.82], 
        rotation: [-0.035, -0.08, 0]
    }, { // phone - 4
        position: [3.205, -2.75 + 4.6, 6.74], 
        rotation: [0, -.4, 0], 
    }, { // calender - 5
        position: [-1.055, 4.6-2.59, 6.22], 
        rotation: [-.07, .66, .06]
    }, { // trophies - 6
        position: [5.00, 3.25, 5], 
        rotation: [-.15, -.2, 0], 
    }, { // alexa - 7
        position: [-10.025, 4.6-2.63, 6.97], 
        rotation: [-.22, -.74, -.11], 
    }, { // letter - 8
        position: [.025, 4.6+.4, 3.20], 
        rotation: [-1.57, 0, -.1]
    }, { // credit pos - 9
        position: [7.06, 14.66, 6.5], 
        rotation: [.1, 0.87, -.14]
    } 
]
const dataLen = rawPath.length
const cameraPath = rawPath.map(obj => {
    return {
        position: shiftCenter(obj.position),
        rotation: new Vector3().fromArray(obj.rotation),
    }
})
const paths = ["home", "hero", "resume", "webProjects", "androidProjects", "events", "achievements", "testimonials", "mail", "credits"]
const consoleMsg = `
        ,--,                                                                                                    
      ,--.'|            ,--,    ,--,                               .---.                     ,--,               
   ,--,  | :          ,--.'|  ,--.'|                              /. ./|                   ,--.'|         ,---, 
,---.'|  : '          |  | :  |  | :     ,---.                .--'.  ' ;   ,---.    __  ,-.|  | :       ,---.'| 
|   | : _' |          :  : '  :  : '    '   ,'\\              /__./ \\ : |  '   ,'\\ ,' ,'/ /|:  : '       |   | : 
:   : |.'  |   ,---.  |  ' |  |  ' |   /   /   |         .--'.  '   \\' . /   /   |'  | |' ||  ' |       |   | | 
|   ' '  ; :  /     \\ '  | |  '  | |  .   ; ,. :        /___/ \\ |    ' '.   ; ,. :|  |   ,''  | |     ,--.__| | 
'   |  .'. | /    /  ||  | :  |  | :  '   | |: :        ;   \\  \\;      :'   | |: :'  :  /  |  | :    /   ,'   | 
|   | :  | '.    ' / |'  : |__'  : |__'   | .; :         \\   ;  \`      |'   | .; :|  | '   '  : |__ .   '  /  | 
'   : |  : ;'   ;   /||  | '.'|  | '.'|   :    |          .   \\    .\\  ;|   :    |;  : |   |  | '.'|'   ; |:  | 
|   | '  ,/ '   |  / |;  :    ;  :    ;\\   \\  /            \\   \\   ' \\ | \\   \\  / |  , ;   ;  :    ;|   | '/  ' 
;   : ;--'  |   :    ||  ,   /|  ,   /  \`----'              :   '  |--"   \`----'   ---'    |  ,   / |   :    :| 
|   ,/       \\   \\  /  ---\`-'  ---\`-'                        \\   \\ ;                        ---\`-'   \\   \\  /   
'---'         \`----'                                          '---"                                   \`----'    


                                     ,----,                                                                                                                          
                                   ,/   .\`|                                                                                                                          
    ,---,.                       ,\`   .'  :                                             ,---,              ,----..                               ___                 
  ,'  .'  \\                    ;    ;     /                                           ,--.' |             /   /   \\                ,-.----.    ,--.'|_               
,---.' .' |                  .'___,/    ,'            __  ,-.         ,--,            |  |  :            |   :     :          ,--, \\    /  \\   |  | :,'              
|   |  |: |                  |    :     |           ,' ,'/ /|       ,'_ /|   .--.--.  :  :  :            .   |  ;. /        ,'_ /| |   :    |  :  : ' :              
:   :  :  /     .--,         ;    |.';  ;  ,--.--.  '  | |' |  .--. |  | :  /  /    ' :  |  |,--.        .   ; /--\`    .--. |  | : |   | .\\ :.;__,'  /    ,--.--.    
:   |    ;    /_ ./|         \`----'  |  | /       \\ |  |   ,','_ /| :  . | |  :  /\`./ |  :  '   |        ;   | ;  __ ,'_ /| :  . | .   : |: ||  |   |    /       \\   
|   :     \\, ' , ' :             '   :  ;.--.  .-. |'  :  /  |  ' | |  . . |  :  ;_   |  |   /' :        |   : |.' .'|  ' | |  . . |   |  \\ ::__,'| :   .--.  .-. |  
|   |   . /___/ \\: |             |   |  ' \\__\\/: . .|  | '   |  | ' |  | |  \\  \\    \`.'  :  | | |        .   | '_.' :|  | ' |  | | |   : .  |  '  : |__  \\__\\/: . .  
'   :  '; |.  \\  ' |             '   :  | ,\" .--.; |;  : |   :  | : ;  ; |   \`----.   \\  |  ' | :        '   ; : \\  |:  | : ;  ; | :     |\`-'  |  | '.'| ,\" .--.; |  
|   |  | ;  \\  ;   :             ;   |.' /  /  ,.  ||  , ;   '  :  \`--'   \\ /  /\`--'  /  :  :_:,'        '   | '/  .''  :  \`--'   \\:   : :     ;  :    ;/  /  ,.  |  
|   :   /    \\  \\  ;             '---'  ;  :   .'   \\---'    :  ,      .-./'--'.     /|  | ,'            |   :    /  :  ,      .-./|   | :     |  ,   /;  :   .'   \\ 
|   | ,'      :  \\  \\                   |  ,     .-./         \`--\`----'      \`--'---' \`--''               \\   \\ .'    \`--\`----'    \`---'.|      ---\`-' |  ,     .-./ 
\`----'         \\  ' ;                    \`--\`---'                                                          \`---\`                     \`---\`              \`--\`---'     
                \`--\`                                                                                                                                                 

`

// -------------- CHANGING DATA --------------
const webProjects = [
    // { liId: '', name: '', repoLink: '', tech: [], liveLink: '', desc: '', imgs: 0},
    { liId: 'atlas-game' , name: 'Atlas Game', repoLink: 'https://github.com/TarushGupta23/ATLAS_GAME', tech: ['react', 'socketio', 'pgsql'], liveLink: 'https://atlas-game.vercel.app', desc: 'An interactive web app built with React and Socket.IO, featuring a custom Express server and API, both developed by me, and a PostgreSQL database for efficient data management.', imgs: 3 },
    { liId: 'library-proj', name: 'Library Management system', repoLink: 'https://github.com/TarushGupta23/nitj_library/', tech: ['react', 'php'], liveLink: '', desc: 'A web application designed to enhance the management and accessibility of library resources. Created under the guidance of college staff, it ensures efficient management of library resources.', imgs: 3 },
    { liId: 'parking-mngmnt-sys' , name: 'Parking Management system', repoLink: 'https://github.com/TarushGupta23/Parking-Management-System', tech: ['php', 'css'], liveLink: '', desc: 'A comprehensive database management system for efficient and organized parking management. The system is built using HTML, CSS, JavaScript, and PHP, providing a user-friendly interface.', imgs: 3 },
    // { liId: 'iota-website' , name: 'Iota Website', repoLink: 'https://github.com/SdSingh10/iota_official_website', tech: ['css'], liveLink: '', desc: 'Official Website of Iota Club (media cell - NITJ). This club empowers students through inclusive, innovative learning. Focused on leadership and interdisciplinary studies', imgs: 1 },
]
const androidProjects = [
    // { liId: '', name: '', repoLink: '', tech: [], liveLink: '', desc: '', imgs: 0},
    { liId: 'x-change', name: 'Xchange', repoLink: 'https://github.com/TarushGupta23/X-change', tech: ['java', 'firebase'], liveLink: '', desc: 'Xchange promotes a payment-free environment where users can exchange items they no longer need for items they desire, fostering a sense of community and sustainability', imgs: 4},
    { liId: 'my-pages', name: 'MyPages', repoLink: 'https://github.com/TarushGupta23/MyPages', tech: ['sqlite', 'java', 'firebase'], liveLink: '', desc: 'Java-based application that offers a variety of features to enhance your productivity and creativity.', imgs: 8 },
    { liId: 'attendence-tracker', name: 'AttendenceTracker', repoLink: 'https://github.com/TarushGupta23/AttendenceTrackerApp', tech: ['kotlin', 'firebase'], liveLink: '', desc: 'A project created under GDSC (Google Developer Student Clubs). This app is designed to help users keep track of their attendance for multiple subjects conveniently.', imgs: 2},
]

const events = [
    // {start: '', end: '', content: '', title: '', img: '},
    // wrap content in <div> and highlighted part in <span>
    { start: '2018', end: '2022', img: 'dav', title: 'High School Degree', content: 
        <div>I graduated with a high school degree in the <span>Non-Medical stream</span> from <span>Police DAV Public School, Ludhiana</span>. My education there focused on providing a strong foundation in analytical and problem-solving skills, and preparing me for further studies and career opportunities in technical fields.</div>
    }, { start: 'Oct 2022', end: 'Till Date', img: 'nitj', title: "Bachelor's Degree", content: 
        <div>I am currently pursuing a Bachelor's degree in <span>Information Technology</span> from <span>Dr. B.R. Ambedkar National Institute of Technology Jalandhar</span>. This program equips me with in-depth knowledge and practical skills in software development, data management, and network security, preparing me for a dynamic career in the IT industry.</div>
    }, { start: 'Nov 2023', end: 'Dec 2023', img: 'certif', title: "Online Courses", content: 
        <div>I have completed several online courses to enhance my technical skills, including <span>Data Structures and Algorithms in Java</span> from the Alpha Course by Apna College, <span>Android Development</span> from Oak Academy on Udemy, <span>MERN Development</span> from a Udemy course by Dr. Angela Yu, and <span>Three.js</span> from the ThreeJs Journey by Bruno Simon.</div>
    }, { start: 'Oct 2023', end: 'Till Date', img: 'gdsc', title: 'Android Team Member : GDSC', content: 
        <div>As a member of the <span>Android Development team in the GDSC club</span> at my college, I have enhanced my technical skills and collaboration abilities. This role has allowed me to work on innovative projects, stay updated with the latest Android advancements, and contribute to a vibrant tech community, fostering my growth as a proficient and dynamic developer.</div>
    }, { start: 'Nov 2023', end: 'Till Date', img: 'iota', title: 'Android Team Head : IOTA', content: 
        <div>I am the <span>lead of the Android Development team</span> and a <span>core member of the Web Development team in IOTA</span>, the media cell of my college. This dual role has allowed me to refine my leadership and technical skills, work on diverse projects, and contribute significantly to both Android and web development initiatives, fostering a comprehensive growth in my abilities as a developer.</div>
    },
]
const achievements = [
    // { title: '', desc: ''},
    { title: 'Internship Representative : NIT Jalandhar', desc: 'As the Internship Representative for the IT branch at NIT Jalandhar, I facilitate internship opportunities for my peers, connecting them with industry professionals and coordinating recruitment activities.'},
    { title: 'Supervisor : Hackmol 5.0', desc: 'I had the privilege of serving as a supervisor for Hackmol 5.0, organized by the Google Developer Student Clubs at my college. My role involved supporting teams, addressing any issues, and fostering a collaborative and innovative atmosphere throughout the hackathon.' },
    { title: 'Live Session: Android Study Jams', desc: 'I conducted a live session on YouTube for Android Study Jams, organized by GDSC. In this session, I taught Android development using Kotlin and demonstrated how to build an attendance app.'},
]
const testimonials = [
    // { by: '', position: '', text: '' },
    { by: 'DP tripathi', position: 'Diputy Librarian, NIT Jalandhar', text: `Mr. Tarush Gupta's outstanding work on our new online journal management portal has greatly improved our journal access and research productivity. His dedication and expertise are truly commendable. Thank you, Tarush, for your exceptional contributions.`, img: 'dp-tripathi' },
]

export { dataLen, cameraPath, consoleMsg, paths, webProjects, androidProjects, homeCamera, events, achievements, testimonials }