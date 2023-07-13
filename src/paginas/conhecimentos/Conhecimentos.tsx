import './Conhecimentos.css'
import { useState } from 'react';


export function Conhecimentos(){

    const [displayText, setDisplayText] = useState('*passe o moouse por cima de alguma habilidade*');

    const handleMouseOverJs = () => {
        setDisplayText('js');
    };

    const handleMouseOverTs = () => {
        setDisplayText('O typeScript é o Javascript tipado')
    }

    const handleMouseOverNode = () => {
        setDisplayText('node')
    }

    const handleMouseOverReact = () => {
        setDisplayText('React é sensacional para frontend')
    }

    const handleMouseOverNest = () => {
        setDisplayText('nest serve para backend')
    }

    const handleMouseOut = () => {
        setDisplayText('*passe o moouse por cima de alguma habilidade*');
    };


    


    return(
        <>
            <div id='conhecimentos'>
                <h1>Conhecimentos<span className='ponto'>:</span></h1>
            </div>
            <div className='containerc'>
                <div>
                    <p id="elemento1">{displayText}</p>
                </div>
                <div className='gridhab'>
                    <div onMouseOver={handleMouseOverJs} onMouseOut={handleMouseOut}><img width="48" height="48" src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javascript--v1"/></div>
                    <div onMouseOver={handleMouseOverTs} onMouseOut={handleMouseOut}><img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/></div>
                    <div onMouseOver={handleMouseOverNode} onMouseOut={handleMouseOut}><img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/></div>
                    <div onMouseOver={handleMouseOverReact} onMouseOut={handleMouseOut}><img width="30" height="30" src="https://img.icons8.com/offices/30/react.png" alt="react"/></div>
                    <div onMouseOver={handleMouseOverNest} onMouseOut={handleMouseOut}><img width="48" height="48" src="https://img.icons8.com/color/48/nestjs.png" alt="nestjs"/></div>
                </div>
            </div>
        </>
    )
}
