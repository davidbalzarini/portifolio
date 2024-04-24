import CardCertificado from '../../components/cardCertidicado/CardCertificado';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import './Certificados.css'
import { useContext } from 'react';


export function Certificados(){

    
    const { isDarkMode } = useContext(ThemeContext);

    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='certificados'>
                <h1>Certificados<span className='ponto'>:</span></h1>
            </div>
            <div>
                <CardCertificado/>
            </div>
        </div>
    )
}
