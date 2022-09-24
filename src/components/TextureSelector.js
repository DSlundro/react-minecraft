
import { useState, useEffect } from 'react';
import { useKeyboard } from './../hooks/useKeyboard';
import { useStore } from './../hooks/useStore';
import { dirtImg, glassImg, grassImg, woodImg, logImg } from '../images/images';

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
}

export const TextureSelector = () => {
    //const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        log,
        wood,
    } = useKeyboard();

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            log,
            wood,
        }

        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture){
            console.log('pressed', pressedTexture[0]);
            setTexture(pressedTexture[0])
        }

    }, [setTexture, dirt, grass, glass, wood, log]);

/*     useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture]) */

    return (
        <div className='absolute texture-selector'>
            {Object.entries(images).map(([k, src]) => {
                return (
                    <img 
                    className={`${k === activeTexture ? 'active' : ''}`}
                    key={k} 
                    src={src} 
                    alt={k}
                    />
                )
            })}
        </div>
    )
}