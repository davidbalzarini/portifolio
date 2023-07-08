

import './Projetos.css'
import { Cardd } from '../../components/card/Cardd';



const projetos = [
    {
        id: 1,
        project:{
            imgUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
            name: "David Balzarini",
            descreption: "Web Developer"
        }
    },
    {
        id: 2,
        project:{
            imgUrl: "probemimg.png",
            name: "Probem",
            descreption: "esse foi o projeto final..."
        }
    },
    {
        id: 3,
        project:{
            imgUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
            name: "David Balzarini",
            descreption: "Web Developer"
        }
    },
    {
        id: 4,
        project:{
            imgUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
            name: "David Balzarini",
            descreption: "Web Developer"
        }
    },
    
  ]

function Projetos(){
    return (
        <>
            <div id='projetos' className="aa">
                <div>
                    <h1 className='hidden'>Projetos em destaque<span className='ponto'>:</span></h1>
                    <h1>Projetos em destaque<span className='ponto'>:</span></h1>
                </div>
                <div className='containergrid'>
                    {/* <div>
                        <div className='containerimg2'>
                            <a href="https://probemreact.vercel.app/" target="_blank"><img className='imgprobem' src="probemimg.png" alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <div className='flex tamanho2'>
                            <h2 className='titulo2'>
                                Probem<span className='ponto'>.</span>
                            </h2>
                            <p className='resumoprojeto2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo, molestias voluptatem nesciunt sunt sequi vel reiciendis ipsa, illum quam cum hic quibusdam at nulla officiis placeat numquam fugit perferendis?
                            </p>
                        </div>
                    </div> */}
                    {projetos.map(projeto => {
                        return(
                            <Cardd
                            project={projeto.project}
                            />
                        )
                    })}
                    
                    
                </div>
                
            </div>
        </>
    )
}
export default Projetos;