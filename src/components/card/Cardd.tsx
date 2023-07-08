import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './Cardd.css'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';






interface Projeto {
  project:{
    imgUrl: string,
    name: string,
    descreption: string
  }
}




export function Cardd({project}: Projeto) {
  

  return (
    <Card sx={{ minWidth: 360 }} className='card'>
      <CardHeader
        title={project.name}
        subheader=""
      />
      <CardMedia
        className='fotocard'
        component="img"
        height="250"
        image={project.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" className='text-card'>
          {project.descreption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="acessar código">
          
        </IconButton>
        <IconButton aria-label="acessar projeto">

        </IconButton>    
      </CardActions>
    </Card>
  );
}


