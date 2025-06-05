import { useContext, useEffect, useState } from 'react';
import styles from './Footer.module.css'
import { ThemeContext } from '../ThemeToogle/Theme';
import { LanguageContext } from '../../Idioma/idioma';
import { languageTexts } from '../../Idioma/languageTexts';


export function Footer(){
    const {language} = useContext(LanguageContext);
    const { isDarkMode } = useContext(ThemeContext);

    const [displayText, setDisplayText] = useState("copy.png");

    const stringParaCopiar = "davidbalzarinipereira@gmail.com"

    const copiarString = async() => {
        try{
            await navigator.clipboard.writeText(stringParaCopiar)
            setDisplayText("check.png")
        }
        catch(err){
            console.error('Erro ao copiar o texto', err)
        }
        return setTimeout(() => {
            const copyIcon = isDarkMode ? "copy.png" : "copy2.png"
            setDisplayText(copyIcon)
        }, 2000)
    }

    useEffect(() => {
        if(!isDarkMode){
            setDisplayText("copy2.png")
        }
        else{
            setDisplayText("copy.png")
        }
    }, [isDarkMode])
    
    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div className={styles.container} >
                <footer className={styles.footer}>
                    <div className={styles.containerdiv}>
                        <div className='flex items-center'>
                            <p className={styles.margin2}>{stringParaCopiar}</p>
                            <button onClick={() => void copiarString()}>
                                <img src={displayText} alt="botão de copiar o email" width={20} />
                            </button>
                        </div>
                        <div className={styles.margin}>
                            <p className='hidden  lg:block'>|</p>
                        </div>
                        <div>
                            <p>&copy; {language == "en" ? languageTexts.en.footer : languageTexts.pt.footer}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}