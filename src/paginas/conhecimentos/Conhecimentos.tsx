import './Conhecimentos.css'


export function Conhecimentos(){


    // const elemento1 = document.getElementById('elemento1') as HTMLElement;
    // const js = document.getElementById('js') as HTMLElement;
    // const ts = document.getElementById('ts') as HTMLElement;
    // const node = document.getElementById('node') as HTMLElement;
    // const react = document.getElementById('react') as HTMLElement;
    // const nest = document.getElementById('nest') as HTMLElement;
    // const nest = document.getElementById('react') as HTMLElement;
    
    // js.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'javascript é';
    // });
    
    // js.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });
    
    // ts.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'typescript';
    // });
    
    // ts.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });
    
    //   node.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'node';
    // });
    
    // node.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });
      
    //   react.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'react';
    // });

    // react.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });
    
    
    
    
    //   nest.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'nest';
    // });

    // nest.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });
    
    
    
    
    //   nest.addEventListener('mouseover', function() {
    //   elemento1.textContent = 'nest';
    // });

    // nest.addEventListener('mouseout', function() {
    //     elemento1.textContent = '*passe o mouse por cima de alguma habilidade*';
    //   });

    







    return(
        <>
            <div id='conhecimentos'>
                <h1>Conhecimentos<span className='ponto'>:</span></h1>
            </div>
            <div className='containerc'>
                <div>
                    <p id="elemento1">*passe o mouse por cima de alguma habilidade*</p>
                </div>
                <div className='gridhab'>
                    <div id="js"><img width="48" height="48" src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javascript--v1"/></div>
                    <div id="ts"><img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/></div>
                    <div id='node'><img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/></div>
                    <div id='react'><img width="30" height="30" src="https://img.icons8.com/offices/30/react.png" alt="react"/></div>
                    <div id='nest'><img width="48" height="48" src="https://img.icons8.com/color/48/nestjs.png" alt="nestjs"/></div>
                </div>
            </div>
        </>
    )
}
