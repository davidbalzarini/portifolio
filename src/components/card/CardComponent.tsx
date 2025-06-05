
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './CardComponent.css'
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../estaticos/ThemeToogle/Theme';
import { Tooltip } from '@mui/material';
import { TagLabel } from '../tag';

interface Projeto {
  project:{
    imgUrl: string,
    name: string,
    descreption: string,
    url:string,
    code:string,
    videoUrl?: string,
    tags?: string[]
  }
}

export function CardComponent({project, isHovered}: {project: Projeto['project'], isHovered?: boolean}) {

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
    sx={{ display: 'flex', flexDirection: 'column' }}
    className='card'>
      <CardHeader
        title={project.name}
        subheader=""
      />
      {
        project.videoUrl && isHovered ? (
          <CardMedia
            component="video"
            src={project.videoUrl}
            autoPlay
            muted
            loop
            className="fotocard"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        ) : (
          <CardMedia
            component="img"
            image={project.imgUrl}
            alt={project.name}
            className='card-image'
          />
        )
      }
      <CardContent>
        <Typography variant="body2" className='text-card'>
          {project.descreption}
        </Typography>
      </CardContent>
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0 0 15px 0', alignItems: 'center', justifyContent: 'center' }}>
          {project.tags.map((tag, index) => (
            <TagLabel key={index} name={tag} />
          ))}
        </div>
      )}
      <div style={{flex: 1}} />
    
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title={!project.url || project.url === "" ?  "Indisponível" : "Ver Projeto"} arrow>
          <span>
            <a
              href={project.url}
              target="blank"
              style={{
                pointerEvents: project.url ? 'auto' : 'none',
                filter: project.url ? 'none' : 'grayscale(1) opacity(0.5)',
                transition: 'filter 0.2s'
              }}
            >
              <img className="br" src={eye} alt="" width="30" />
            </a>
          </span>
      </Tooltip>
      <Tooltip title={!project.code || project.code === "" ?  "Indisponível" : "Ver Projeto"} arrow>
          <a href={project.code} target="blank"
          style={{
            pointerEvents: project.code ? 'auto' : 'none',
            filter: project.code ? 'none' : 'grayscale(1) opacity(0.5)',
            transition: 'filter 0.2s'
          }}>
            <img className="codfonte br" src={codfonte} alt="" width="30" />
          </a>
      </Tooltip>
    </div>
    </Card>
  );
}


