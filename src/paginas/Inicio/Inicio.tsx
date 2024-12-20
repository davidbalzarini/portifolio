import { useContext } from 'react';
import './Inicio.css'
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { LanguageContext, languageTexts } from '../../components/Idioma/idioma';


function Inicio(){

    const { isDarkMode } = useContext(ThemeContext);
    const {language} = useContext(LanguageContext)
    
    
    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='inicio' className='inicio-margin inicio'>
            <div>
                <text  className='text-hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolores perspiciatis reprehenderit, consequuntur aut aspernatur sint tenetur! Nemo ex, perspiciatis asperiores, atque nisi nesciunt rem provident, mollitia enim pariatur facere.</text>  
            </div>
            <div>
                <text  className='text-hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolores perspiciatis reprehenderit, consequuntur aut aspernatur sint tenetur! Nemo ex, perspiciatis asperiores, atque nisi nesciunt rem provident, mollitia enim pariatur facere.</text>  
            </div>
            <div className='container'>
                <div className='divimg'>
                    <img className="imagemperfil" src="fotodavid.jpeg" alt="" />
                </div>
                <div>
                    <div className='.cargo'>
                        <p className='h1'>
                                {language == "pt" ? languageTexts.pt.Inicio.role : languageTexts.en.inicio.role}<span className='ponto'>.</span>
                        </p>
                    </div>
                    <div className='divtexto'>
                        
                        <text className='resumo'>
                            {language == "pt" ? languageTexts.pt.Inicio.resume  : languageTexts.en.inicio.resume}
                            {/* Me chamo David, tenho 19 anos e sou um desenvolvedor fullstack
                            formado pela generation brasil, domino diversas tecnologias, como por
                            exemplo <span >Javascript, Typescript, React.Js, Node.js, React Native, MySQL e 
                             Nest.js<span className='ponto'>.</span></span> */}
                            <span className='bold'>{language == "pt" ? languageTexts.pt.Inicio.programacao : languageTexts.en.inicio.programacao}</span>
                        </text>
                    </div>
                    <div className='top'>
                        <a  href="https://docs.google.com/document/d/1462PK6h7acPiMW7IZnwFWxrhilUzhJancaVPGXsHwf4/edit?usp=sharing" target='blank'><button className='buttoncurriculo'>{language == "pt" ? languageTexts.pt.Inicio.curriculo : languageTexts.en.inicio.curriculo}</button></a>
                        <a href="https://www.linkedin.com/in/david-balzarini-pereira-645481227/" target='blank'><button className='buttonlinkedin'>Linkedin</button></a>
                        <a href="https://github.com/davidbalzarini" target='blank'><button className='buttongit'>Github</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Inicio;