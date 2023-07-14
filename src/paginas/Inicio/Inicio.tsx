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
                            exemplo javascript, typescript, React.Js, Node.js, React Native, MySQL e 
                             Nest.js<span className='ponto'>.</span>
                        </text>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Inicio;