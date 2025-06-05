import { useContext, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { LanguageContext } from '../../components/Idioma/idioma';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { GridLegacy } from '@mui/material';

export default function Conhecimentos() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [displayText, setDisplayText] = useState('');

  const texts = languageTexts[language].conhecimentos;

  const handleMouseOver = (text: string) => {
    setDisplayText(text);
  };

  const handleMouseOut = () => {
    setDisplayText('');
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
          {/* Texto superior */}
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
        </GridLegacy>
        {/* Grid de habilidades */}
        <GridLegacy item xs={12} sm={12} md={6} lg={6}>
          <GridLegacy
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* Ícones de habilidades */}
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.js)} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="js.png"
                alt="JavaScript"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.ts)} onMouseOut={handleMouseOut}>
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
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.node)} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="node.png"
                alt="Node.js"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.nest)} onMouseOut={handleMouseOut}>
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
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.html)} onMouseOut={handleMouseOut}>
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
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.css)} onMouseOut={handleMouseOut}>
              <Box
                component="img"
                src="css.png"
                alt="CSS"
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </GridLegacy>
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.react)} onMouseOut={handleMouseOut}>
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
            <GridLegacy item xs={6} sm={3} md={3} onMouseOver={() => handleMouseOver(texts.rn)} onMouseOut={handleMouseOut}>
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
          </GridLegacy>
        </GridLegacy>
      </GridLegacy>
    </Box>
  );
}
