import { LanguageContext } from '../../components/Idioma/idioma';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import './Conhecimentos.css'
import { useState, useContext } from 'react';


export function Conhecimentos(){

    const {language} = useContext(LanguageContext)
    const [displayText, setDisplayText] = useState('');
    const { isDarkMode } = useContext(ThemeContext);

    
    

    const handleMouseOverJs = () => {
        setDisplayText(languageTexts[language].conhecimentos.js);
    };

    const handleMouseOverTs = () => {
        setDisplayText(languageTexts[language].conhecimentos.ts)
    }

    const handleMouseOverNode = () => {
        setDisplayText(languageTexts[language].conhecimentos.node)
    }

    const handleMouseOverReact = () => {
        setDisplayText(languageTexts[language].conhecimentos.react)
    }

    const handleMouseOverNest = () => {
        setDisplayText(languageTexts[language].conhecimentos.nest)
    }

    const handleMouseOverHTML = () => {
        setDisplayText(languageTexts[language].conhecimentos.html)
    }

    const handleMouseOverCSS = () => {
        setDisplayText(languageTexts[language].conhecimentos.css)
    }

    const handleMouseOverReactNative = () => {
        setDisplayText(languageTexts[language].conhecimentos.rn)
    }

    const handleMouseOut = () => {
        setDisplayText('');
    };

    

    


    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='conhecimentos'>
                <h1>{language == "en" ? languageTexts.en.conhecimentos.titulo : languageTexts.pt.conhecimentos.titulo}<span className='ponto'>:</span></h1>
            </div>
            <div className='containerc'>
                <div className='texttop'>
                    <p className='tamcert'>{displayText == '' ? (languageTexts[language].conhecimentos.none) : displayText}</p>
                </div>
                <div className='gridhab'>
                    <div onMouseOver={handleMouseOverJs} onMouseOut={handleMouseOut}><img width="100" height="100" src="js.png" alt="javascript--v1"/></div>
                    <div className='mtop' onMouseOver={handleMouseOverTs} onMouseOut={handleMouseOut}><img width="120" height="120" src="ts.png" alt="typescript"/></div>
                    <div onMouseOver={handleMouseOverNode} onMouseOut={handleMouseOut}><img width="100" height="100" src="node.png" alt="node-js"/></div>
                    <div onMouseOver={handleMouseOverNest} onMouseOut={handleMouseOut}><img width="100" height="100" src="nest.png" alt="nestjs"/></div>
                    <div onMouseOver={handleMouseOverHTML} onMouseOut={handleMouseOut}><img width="100" height="100" src="html.png" alt="react"/></div>
                    <div onMouseOver={handleMouseOverCSS} onMouseOut={handleMouseOut}><img width="100" height="100" src="css.png" alt="react"/></div>
                    <div onMouseOver={handleMouseOverReact} onMouseOut={handleMouseOut}><img width="100" height="100" src="react.png" alt="react"/></div>
                    <div onMouseOver={handleMouseOverReactNative} onMouseOut={handleMouseOut}><img width="100" height="100" src="reactn.png" alt="react"/></div>
                    
                </div>
            </div>
        </div>
    )
}
