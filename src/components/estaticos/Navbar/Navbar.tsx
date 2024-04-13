import { Link } from 'react-scroll';
import './Navbar.css'
import { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeToogle/Theme';
import { Swicht } from '../Swicht/Swicht';

function Navbar(){

    const { isDarkMode } = useContext(ThemeContext);
    const [idioma, setIdioma] = useState('portugues');


    return (
        <div className={isDarkMode ? 'escuro' : 'claro'}>
        <div className='containernav'>
            <nav className="navbar end">

                
                <div className="center menu-section on">
                    <Link to='/navmob'>
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </Link>
                    <div >
                        {<Swicht />}
                    </div>
                    <div >
                        <Link to="inicio"
                        smooth={true}
                        duration={500}>
                            <button className="btn-design">Inicio</button>
                        </Link>
                    </div>
                    <div >
                        <Link to="sobre"
                        smooth={true}
                        duration={500}>
                            <button className="btn btn-design none">Sobre mim</button>
                        </Link>
                    </div>
                    <div >
                        <Link 
                        to="projetos"
                        smooth={true}
                        duration={500}>
                            <button className="btn btn-design">Projetos</button>
                        </Link>
                    </div>
                    
                    <div className='margin-rigth'>
                        <Link 
                        to="conhecimentos"
                        smooth={true}
                        duration={500}>
                            <button className=" btn btn-design">Conhecimentos</button>
                        </Link>
                    </div>
                    <div className='margin-rigth'>
                        <Link 
                        to="certificados"
                        smooth={true}
                        duration={500}>
                            <button className=" btn btn-design">Certificados</button>
                        </Link>
                    </div>
                    <div className='margin-rigth'>
                        <Link 
                        to="conhecimentos"
                        smooth={true}
                        duration={500}>
                            <button className=" btn btn-design">Idioma: {idioma}</button>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </div>
        </div>
    );
}

export default Navbar;