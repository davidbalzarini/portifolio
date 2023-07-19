import { useContext, useState } from 'react';
import styles from './Footer.module.css'
import { ThemeContext } from '../ThemeToogle/Theme';


export function Footer(){
    const { isDarkMode } = useContext(ThemeContext);

    const [displayText, setDisplayText] = useState("copy.png");

    const stringParaCopiar = "davidbalzarinipereira@id.uff.br"

    const copiarString = () => {
    navigator.clipboard.writeText(stringParaCopiar)
    setDisplayText("check.png")

}

    
    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div className={styles.container} >
                <footer className={styles.footer}>
                    <div className={styles.containerdiv}>
                    
                        <p className={styles.margin2}>{stringParaCopiar}</p>
                        <button onClick={copiarString} >
                            <img src={displayText} alt="botão de copiar o email" width={20} />
                        </button>
                        <div className={styles.margin}>
                            <p>|</p>
                        </div>
                        <div >
                            <p>&copy; 2023 David Balzarini. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}