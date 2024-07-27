import { Clone, OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

export default function PhoneExperience() {
    const clone = useRef() // creating a pointer variable

    const model = useGLTF('./models/Table.glb') // model file is stored in public/models/Table.glb
    // glb file is binary file format which stores data about model like its structure, colors, images, animations
    // useGLTf downloads the table.glb and stores it in model
    /* model has many properties, important one: 
            model.scene -> contains structure of model {texture of models is inside structure}
            model.animations -> contains array of animations of model
    */

    const texture = useTexture('pathToTexture') // texture is an img file which is applied on a model 
    // just think it like you drew a stickman in ms paint and instead of coloring its Shirt u pasted an image

    const animation = useAnimations(model.animations, clone.current) // single model can have multiple animations
    // animation is applied on a structure such as a scene so we can do useAnimations(model.animations, model.scene)
    // we load animations from model.animations and apply it on clone.current [not clone.current.scene or anything - explained later]

    useEffect(() => { // we will apply materials to the model here: 
        if (clone.current) { // it is possible that clone.current is not 'YET' defined so this if statement avoids showing error
            // a scene is hierarchial structure containg multiple meshes (3d objects), lights, cameras in an array called children
            // these children may sometime contain a group of meshes in an array so code sometimes look like : model.scene.children[i].children[j].children[k] ... -> use blender to see ki tumhe jo mesh/3d obj chahiye vo kaha h
            // every mesh has 2 things 
            //      geometry (shape : sphere, cube etc) 
            //      material (things like how the surface looks, ie color, koi image uspe chadhi hui ho (ie texture), ya uske siraf edges (wireframe) hi visible ho) 
            

            const material = clone.current.children[childIdx].material; // save target object's material in variable
            material.map = texture; // apply texture
            material.needsUpdate = true; // update material
        }
    }, [clone.current]) // run this useEffect only if clone.current changes 

    const playAnim = () => { 
        // animation is an array of multiple animations so we save our required animation in an variable:
        const action = animation.actions['walkingAnimation']
        // syntax: const action = animation.actions['animationName'] - or - animation.actions.animationName
        action.play() // just play it nothing hard
    }
    
    return <div>
        <button onClick={playAnim}>Start walking</button> {/* button to play animation */}
        <Canvas> 
        {/* 
            Canvas -> html element just like <div> but this provides area to draw 3d models
            simple html canvas looks like : <canvas>
            but here we use react-3-fiber <Canvas> makes code easier : has inbuilt camera, clock, etc. (no need to know)
        */}
        {/* <perspectiveCamera /> */} {/* we can also do this to create our own camera but no need as <Canvas> already has one */}
        
            <OrbitControls /> {/* 
                enables us to move camera in an orbit like motion, makes camera always faces center : (0, 0, 0) coordinates
            */}
            
            {/* we need some light to see most of the models - model.scene can have lights inside it but the one i used doesnot have */}
            <ambientLight /> {/* lights equally from ALL directions -> casts no shadows */}
            {/* Some other lights :  */}
            <pointLight position={[10, 10, 10]} /> {/* just like sun positioned at (10, 10, 10) {x, y, z} */}
            <directionalLight position={[2, 3, 4]} /> {/* parallel beam of light from (2, 3, 4) to (0, 0, 0) */}

            {/* This is how you create a usual mesh or 3d object */}
            <mesh position-y={-8.45} rotation-x={Math.PI/2} scale={50}>
                <boxGeometry /> {/* cube shape */}
                <meshBasicMaterial color={'red'}/> {/* red color */}
            </mesh>

            <Clone // clone displays our loaded model in canvas
                object={model.scene} // the model we want to display -> we display a structure so obj = model.scene and not model, stuff like animation can be played not displayed
                ref={clone} // create a ref of clone so clone.current points to <Clone> which is model.scene (in object) thus clone.current = model.scene (not clone.current = model)
            />
        </Canvas>
    </div>
}

useGLTF.preload('./models/Table.glb')