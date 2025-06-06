
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
import { LanguageContext } from '../Idioma/idioma';
import { languageTexts } from '../Idioma/languageTexts';

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

export function CardComponent({
  project,
  isHovered,
  onImageClick,
}: {
    project: Projeto['project'],
    isHovered?: boolean,
    onImageClick?: () => void
    }) {

  const { isDarkMode } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);

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
            onClick={onImageClick}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <CardMedia
            component="img"
            image={project.imgUrl}
            alt={project.name}
            className='fotocard'
          />
        )
      }
      <CardContent>
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0 0 15px 0', alignItems: 'center', justifyContent: 'center' }}>
          {project.tags.map((tag, index) => (
            <TagLabel key={index} name={tag} />
          ))}
        </div>
      )}
        <Typography variant="body2" className='text-card'>
          {project.descreption}
        </Typography>
      </CardContent>
      <div style={{flex: 1}} />
    
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title={!project.url || project.url === "" ?  languageTexts[language].projects.indispUrl : languageTexts[language].projects.dispUrl} arrow>
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
      <Tooltip title={!project.code || project.code === "" ?  languageTexts[language].projects.indispCodeUrl : languageTexts[language].projects.dispCodeUrl} arrow>
      <span>
    <a
      href={project.code}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        pointerEvents: project.code ? 'auto' : 'none',
        filter: project.code ? 'none' : 'grayscale(1) opacity(0.5)',
        transition: 'filter 0.2s'
      }}
    >
      <img className="codfonte br" src={codfonte} alt="" width="30" />
    </a>
  </span>
      </Tooltip>
    </div>
    </Card>
  );
}


