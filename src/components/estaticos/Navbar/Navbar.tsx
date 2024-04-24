import { Link } from 'react-scroll';
import './Navbar.css'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeToogle/Theme';
import { Swicht } from '../Swicht/Swicht';
import { LanguageContext, languageTexts } from '../../Idioma/idioma';

function Navbar(){

    const { isDarkMode } = useContext(ThemeContext);
    const {language, toggleLanguage} = useContext(LanguageContext)


    return (
        <div className={isDarkMode ? 'escuro' : 'claro'}>
        <div className='containernav'>
            <nav className="navbar end">

                
                <div className="center menu-section on">
                    {/* <Link to='/navmob'>
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </Link> */}
                    <div >
                        {<Swicht />}
                    </div>
                    <div >
                        <Link to="inicio"
                        smooth={true}
                        duration={500}>
                            <button className="btn-design">{language == "pt" ? languageTexts.pt.menu.inicio : languageTexts.en.menu.inicio}</button>
                        </Link>
                    </div>
                    <div >
                        <Link to="sobre"
                        smooth={true}
                        duration={500}>
                            <button className="btn btn-design none">{language == "pt" ? languageTexts.pt.menu.sobre : languageTexts.en.menu.sobre}</button>
                        </Link>
                    </div>
                    <div >
                        <Link 
                        to="projetos"
                        smooth={true}
                        duration={500}>
                            <button className="btn btn-design">{language == "pt" ? languageTexts.pt.menu.projects : languageTexts.en.menu.projects}</button>
                        </Link>
                    </div>
                    
                    <div className='margin-rigth'>
                        <Link 
                        to="conhecimentos"
                        smooth={true}
                        duration={500}>
                            <button className=" btn btn-design">{language == "pt" ? languageTexts.pt.menu.instruction : languageTexts.en.menu.instruction}</button>
                        </Link>
                    </div>
                    <div className='margin-rigth'>
                        <Link 
                        to="certificados"
                        smooth={true}
                        duration={500}>
                            <button className=" btn btn-design">{language == "pt" ? languageTexts.pt.menu.certificates : languageTexts.en.menu.certificates}</button>
                        </Link>
                    </div>
                    <div >   
                        <button onClick={toggleLanguage} >{language == 'pt' ? <img src="brasilIcon.png" alt="" className='icon'/> : <img src="iconEUA.png" alt="" className='icon' /> } </button>
                    </div>
                </div>
            </nav>
            
        </div>
        </div>
    );
}

export default Navbar;