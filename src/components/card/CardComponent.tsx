
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './CardComponent.css'
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../estaticos/ThemeToogle/Theme';

interface Projeto {
  project:{
    imgUrl: string,
    name: string,
    descreption: string,
    url:string,
    code:string,
    view: boolean
  }
}

export function CardComponent({project}: Projeto) {

  const { isDarkMode } = useContext(ThemeContext);

  const [codfonte, setCodfonte] = useState("codigofonte.png");
  
  
    useEffect(() => {
      if(isDarkMode == true){
        return setCodfonte("codigofonte.png")
      }
      else{
        return setCodfonte("codigofonte2.png")
      }
    }, [isDarkMode])
  
    const [eye, setEye] = useState("olho.png");
  
  
    useEffect(() => {
      if(isDarkMode == true){
        return setEye("olho.png")
      }
      else{
        return setEye("olho2.png")
      }
    }, [isDarkMode])

    
  
  

  return (
    <Card
    className='card'>
      <CardHeader
        title={project.name}
        subheader=""
      />
      <CardMedia
        className='fotocard'
        component="img"
        image={project.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" className='text-card'>
          {project.descreption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <div>
      <a 
        href={project.view ? project.url : undefined}
        target="blank" 
        style={{ pointerEvents: project.view ? 'auto' : 'none' }}
    >
        <img className='br' src={eye} alt="" width="30" />
    </a>
          <a href={project.code} target='blank'><img className='codfonte br' src={codfonte} alt="" width="30" /></a>
      </div> 
    </Card>
  );
}


