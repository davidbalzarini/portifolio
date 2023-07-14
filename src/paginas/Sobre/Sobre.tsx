import { useContext } from 'react';
import styles from './Sobre.module.css'
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';

export function Sobre(){
    const { isDarkMode } = useContext(ThemeContext);


    return(
        <div id='sobre' className={isDarkMode ? 'escuro' : 'claro'}>
            <div className={styles.margintop}>
                <h1>
                    Sobre mim<span className='ponto'>:</span>
                </h1>
                <div className={styles.grid}>
                
                </div>
            </div>
        </div>
        
    )
}