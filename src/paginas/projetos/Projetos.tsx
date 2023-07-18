

import './Projetos.css'
import { Cardd } from '../../components/card/Cardd';
import { useContext } from 'react';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';



const projetos = [
    {
        id: 1,
        project:{
            imgUrl: "probemimg.png",
            name: "Probem",
            descreption: "Esse projeto utiliza as tecnologias ReactJS, Nest e MySQL. O objetivo é conectar pessoas em situações precárias que precisam de materiais de saúde, como cadeiras de rodas e muletas, com aqueles que podem doar esses itens. Com o ReactJS, oferecemos uma interface amigável e responsiva. O framework Nest nos permite criar um backend escalável e modular. Utilizamos o banco de dados MySQL para armazenar com segurança as informações relevantes."
        }
    },
    {
        id: 2,
        project:{
            imgUrl: "blogpessoal.png",
            name: "BlogPessoal",
            descreption: "esse foi o projeto final..."
        }
    },
    {
        id: 3,
        project:{
            imgUrl: "ignite.png",
            name: "Projeto Ignite",
            descreption: "Esse projeto é um projeto ignite"
        }
    },
    // {
    //     id: 4,
    //     project:{
    //         imgUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
    //         name: "David Balzarini",
    //         descreption: "Web Developer"
    //     }
    // },
    
  ]

function Projetos(){

    const { isDarkMode } = useContext(ThemeContext);




    return (
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='projetos' className="aa">
                <div>
                    <h1 className='hidden'>Projetos em destaque<span className='ponto'>:</span></h1>
                    <h1>Projetos em destaque<span className='ponto'>:</span></h1>
                </div>
                <div className='containergrid'>
                    {projetos.map(projeto => {
                        return(
                            <Cardd
                            project={projeto.project}
                            />
                        )
                    })}
                    
                    
                </div>
                
            </div>
        </div>
    )
}
export default Projetos;