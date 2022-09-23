import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei'; 
import { Canvas } from '@react-three/fiber';
import { FVP } from './components/FPV';
import { Ground } from './components/Ground';
import { Player } from './components/Player';


function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[ 100, 100, 20 ]} />
        <ambientLight intensity={0.5} />
        <FVP />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute cursor centered'>+</div>
    </>
  );
}

export default App;
