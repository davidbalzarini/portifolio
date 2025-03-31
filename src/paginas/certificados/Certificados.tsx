import { LanguageContext } from '../../components/Idioma/idioma';
import { languageTexts } from '../../components/Idioma/languageTexts';
import CardCertificado from '../../components/cardCertidicado/CardCertificado';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import './Certificados.css'
import { useContext } from 'react';


export function Certificados(){

    const {language} = useContext(LanguageContext)
    const { isDarkMode } = useContext(ThemeContext);

    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='certificados'>
                <h1>{languageTexts[language].certificates}<span className='ponto'>:</span></h1>
            </div>
            <div style={{margin: 20}}>
                <CardCertificado/>
            </div>
        </div>
    )
}
