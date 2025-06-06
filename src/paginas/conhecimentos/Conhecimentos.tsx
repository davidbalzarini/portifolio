import { useContext, useState } from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import { LanguageContext } from '../../components/Idioma/idioma';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { GridLegacy } from '@mui/material';


const knowledgeLevels: Record<string, number> = {
  ts: 90,
  spring: 80,
  nest: 75,
  html: 95,
  kotlin: 60,
  react: 80,
  rn: 70,
  php: 40,
};

export default function Conhecimentos() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [displayText, setDisplayText] = useState('');
  const [currentSkill, setCurrentSkill] = useState<string | null>(null);

  const texts = languageTexts[language].conhecimentos;

  const handleMouseOver = (text: string, skillKey: string) => {
    setDisplayText(text);
    setCurrentSkill(skillKey);
  };

  const handleMouseOut = () => {
    setDisplayText('');
    setCurrentSkill(null);
  };

  return (
    <Box
      className={isDarkMode ? 'escuro' : 'claro'}
      sx={{
        padding: 4,
        minHeight: '15vh',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '1.8em', md: '2.5em' },
          fontWeight: 'bold',
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        {texts.titulo}
        <span style={{ color: '#4caf50' }}>:</span>
      </Typography>

      <GridLegacy
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <GridLegacy item xs={12} sm={12} md={6} lg={6}>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              marginBottom: 4,
              fontSize: { xs: '1em', md: '1.2em' },
            }}
          >
            {displayText === '' ? texts.none : displayText}
          </Typography>
          {currentSkill && (
            <Box sx={{ width: '80%', mx: 'auto', marginBottom: 4 }}>
              <LinearProgress
                variant="determinate"
                value={knowledgeLevels[currentSkill]}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: isDarkMode ? '#333' : '#eee',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#4caf50',
                  },
                }}
              />
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', marginTop: 1 }}>
                {knowledgeLevels[currentSkill]}%
              </Typography>
            </Box>
          )}
        </GridLegacy>
        <GridLegacy item xs={12} sm={12} md={6} lg={6}>
          <GridLegacy
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.ts, 'ts')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="ts.png"
                alt="TypeScript"
                sx={{
                  width: '110px',
                  height: '110px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.spring, 'spring')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="spring.svg"
                alt="Spring icon"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.nest, 'nest')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="nest.png"
                alt="Nest.js"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.html, 'html')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="html.png"
                alt="HTML"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.kotlin, 'kotlin')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="kotlin-icon.png"
                alt="Kotlin"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.react, 'react')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="react.png"
                alt="React"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.rn, 'rn')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="reactn.png"
                alt="React Native"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.php, 'php')} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="php-icon.png"
                alt="PHP icon"
                sx={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
          </GridLegacy>
        </GridLegacy>
      </GridLegacy>
    </Box>
  );
}
