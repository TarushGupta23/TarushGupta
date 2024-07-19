export default function Lights() {
    return <>
        <ambientLight intensity={4.5} />
        <directionalLight intensity={4.5} position={[0, 13, 52.7]}/>
        <directionalLight intensity={4.5} position={[0, 13, -52.7]}/>
    </>
}