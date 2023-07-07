
import './Projetos.css'

function Projetos(){
    return (
        <>
            <div id='projetos' className="aa">
                <div>
                    <h1 className='hidden'>Projetos em destaque<span className='ponto'>:</span></h1>
                    <h1>Projetos em destaque<span className='ponto'>:</span></h1>
                </div>
                <div className='flex topo'>
                    <div>
                        <h2 className='titulo'>
                            Probem<span className='ponto'>.</span>
                        </h2>
                    </div>
                    <div className='flex tamanho'>
                        <p className='resumoprojeto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo, molestias voluptatem nesciunt sunt sequi vel reiciendis ipsa, illum quam cum hic quibusdam at nulla officiis placeat numquam fugit perferendis?
                        </p>
                    </div>
                    <div className='flex containerimg'>
                        <a href="https://probemreact.vercel.app/" target="_blank"><img className='imgprobem' src="probemimg.png" alt="" /></a>
                    </div>
                </div>
                <div className='margintop flex'>
                    <div className='flex'>
                        <img className='imgprojeto' src="probemimg.png" alt="" />
                    </div>
                    <div className='flex'>
                        
                            <text className='titulo2'>
                                Probem<span className='ponto'>.</span>
                            </text>
                        <text className='resumoprojeto2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo, molestias voluptatem nesciunt sunt sequi vel reiciendis ipsa, illum quam cum hic quibusdam at nulla officiis placeat numquam fugit perferendis?
                        </text>
                    </div>
                </div>
                <div className='marginbot'>
                    <div></div>
                    <div ></div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default Projetos;