import React, { useContext } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { LanguageContext } from '../../components/Idioma/idioma';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { languageTexts } from '../../components/Idioma/languageTexts';
import './Inicio.css'

export default function Inicio() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <Box
    className={isDarkMode ? 'escuro' : 'claro'}
      sx={{
        padding: 4,
        minHeight: '20vh',
        marginTop: {md:10, sm:10, xs:20},
        marginBottom: {lg:5, md:10, sm:5, xs:3},
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Imagem do lado esquerdo */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="fotodavid.jpeg"
            alt="Foto de David"
            sx={{
              width: { xs: '150px', sm: '200px', md: '300px' },
              borderRadius: '50%',
              border: '5px solid',
              borderColor: 'var(--green)',
            }}
          />
        </Grid>

        {/* Texto do lado direito */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.8em', md: '2.5em' }, fontWeight: 'bold' }}>
            {languageTexts[language].inicio.role}
            <span style={{ color: '#4caf50' }}>.</span>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, fontSize: { xs: '1em', md: '1.2em' } }}>
            {languageTexts[language].inicio.resume} {languageTexts[language].inicio.programacao}
          </Typography>

          {/* Botões */}
          <div className='top'>
                        <a  href="https://docs.google.com/document/d/1Ujb6eK_JroqDCjd7XBvCMoHQdkbzAbdTuo1CysVkNnY/edit?usp=sharing" target='blank'>
                            <button className='buttoncurriculo'>{languageTexts[language].inicio.curriculo}</button>
                        </a>
                        <a href="https://www.linkedin.com/in/david-balzarini-pereira-645481227/" target='blank'>
                            <button className='buttonlinkedin'>Linkedin</button>
                        </a>
                        <a href="https://github.com/davidbalzarini" target='blank'>
                            <button className='buttongit'>Github</button>
                        </a>
                    </div>
        </Grid>
      </Grid>
    </Box>
  );
}