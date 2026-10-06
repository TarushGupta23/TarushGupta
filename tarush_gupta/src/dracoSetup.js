import { useGLTF } from '@react-three/drei';

// Serve the Draco decoder from our own domain instead of gstatic.com.
// Must run before any model module calls useGLTF.preload(), so it is imported first in index.js.
useGLTF.setDecoderPath('/draco/');
