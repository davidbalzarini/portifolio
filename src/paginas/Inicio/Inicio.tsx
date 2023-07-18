import { useContext } from 'react';
import './Inicio.css'
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';


function Inicio(){

    const { isDarkMode } = useContext(ThemeContext);

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
                                Desenvolvedor FullStack<span className='ponto'>.</span>
                        </p>
                    </div>
                    <div className='divtexto'>
                        
                        <text className='resumo'>
                            Me chamo David, tenho 19 anos e sou um desenvolvedor fullstack
                            formado pela generation brasil, domino diversas tecnologias, como por
                            exemplo <span className='bold'>Javascript, Typescript, React.Js, Node.js, React Native, MySQL e 
                             Nest.js<span className='ponto'>.</span></span>
                        </text>
                    </div>
                    <div className='top'>
                        <a  href="https://docs.google.com/document/d/1Qiez3h3-afQys4Dn7ZLETKXnb7IBsb73dg4FKy43BAE/edit?usp=sharing" target='blank'><button className='buttoncurriculo'>Curriculo</button></a>
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