
import { Grid } from '@mui/material';
import './Projetos.css'

function Projetos(){
    return (
        <>
            <div id='projetos' className="aa">
                <div>
                    <h1 className='hidden'>Projetos em destaque<span className='ponto'>:</span></h1>
                    <h1>Projetos em destaque<span className='ponto'>:</span></h1>
                </div>
                <div className='marigntop'>
                <Grid  container spacing={2}>
                    <Grid xs={6}>
                        <div>
                            
                        </div>
                        <div className='flex tamanho'>
                            <h2 className='titulo'>
                                Probem<span className='ponto'>.</span>
                            </h2>
                            <p className='resumoprojeto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo, molestias voluptatem nesciunt sunt sequi vel reiciendis ipsa, illum quam cum hic quibusdam at nulla officiis placeat numquam fugit perferendis?
                            </p>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div className='flex containerimg'>
                            <a href="https://probemreact.vercel.app/" target="_blank"><img className='imgprobem' src="probemimg.png" alt="" /></a>
                        </div>
                    </Grid>
                </Grid>
                </div>
                <div className='containergrid'>
                    <div>
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
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Projetos;