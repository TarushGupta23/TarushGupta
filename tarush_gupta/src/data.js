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
        position: [4.605, -3.2 + 4.6, 9.45], 
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
        position: [-.45, 2.97, -2.4], 
        rotation: [-.75, -1.43, -.79], 
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
    // { liId: '', name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
    { liId: 'atlas-game' , name: 'Atlas Game', repoLink: 'https://github.com/TarushGupta23/ATLAS_GAME', tech: ['react', 'socketio', 'pgsql'], liveLink: 'https://atlas-game.vercel.app', desc: 'An interactive web app built with React and Socket.IO, featuring a custom Express server and API, both developed by me, and a PostgreSQL database for efficient data management.' },
    { liId: 'parking-mngmnt-sys' , name: 'Parking Management system', repoLink: 'https://github.com/TarushGupta23/Parking-Management-System', tech: ['php', 'css'], liveLink: '', desc: 'A comprehensive database management system for efficient and organized parking management. The system is built using HTML, CSS, JavaScript, and PHP, providing a user-friendly interface.' },
    { liId: 'iota-website' , name: 'Iota Website', repoLink: '', tech: ['css'], liveLink: '', desc: 'Official Website of Iota Club (media cell of college)' },
    // { liId: 'library proj', name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
]
const androidProjects = [
    // { liId: '', name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
    { liId: 'x-change', name: 'Xchange', repoLink: 'https://github.com/TarushGupta23/X-change', tech: ['java', 'firebase'], liveLink: '', desc: 'Xchange promotes a payment-free environment where users can exchange items they no longer need for items they desire, fostering a sense of community and sustainability'},
    { liId: 'my-pages', name: 'MyPages', repoLink: 'https://github.com/TarushGupta23/MyPages', tech: ['sqlite', 'java', 'firebase'], liveLink: '', desc: 'Java-based application that offers a variety of features to enhance your productivity and creativity.'},
    { liId: 'attendence-tracker', name: 'AttendenceTracker', repoLink: 'https://github.com/TarushGupta23/AttendenceTrackerApp', tech: ['kotlin', 'firebase'], liveLink: '', desc: 'A project created under GDSC (Google Developer Student Clubs). This app is designed to help users keep track of their attendance for multiple subjects conveniently.'},
]

const events = [
    // {start: '', end: '', content: '', title: ''},
    { start: '2018', end: '2022', content: '', title: 'High School Degree' },
    { start: '---', end: 'Till Date', content: '', title: "Bachelor's Degree" },
    { start: '---', end: '---', content: '', title: "Online Courses"}, 
    { start: 'Oct 2023', end: 'Till Date', content: '', title: 'Android Team Member : GDSC' },
    { start: 'Nov 2023', end: 'Till Date', content: '', title: 'Android Team Head : IOTA' },
]
const achievements = [
    // { title: '', desc: ''},
    { title: 'Supervisor : Hackmol 5.0', desc: '' },
    // yt session in gdsc
    // IR IT !!

]
const testimonials = [
    {}
]

export { dataLen, cameraPath, consoleMsg, paths, webProjects, androidProjects, homeCamera, events, achievements, testimonials }