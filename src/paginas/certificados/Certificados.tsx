import { LanguageContext, languageTexts } from '../../components/Idioma/idioma';
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
                <h1>{language == "en" ? languageTexts.en.certificates : languageTexts.pt.certificates}<span className='ponto'>:</span></h1>
            </div>
            <div>
                <CardCertificado/>
            </div>
        </div>
    )
}
