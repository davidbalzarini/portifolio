import { Box, Typography, Grid } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../../components/Idioma/idioma';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import CardCertificado from '../../components/cardCertificado/CardCertificado';

export function Certificados() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Box
      className={isDarkMode ? 'escuro' : 'claro'}
      sx={{
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        minHeight: '20vh', 
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
        {languageTexts[language].certificates}
        <span style={{ color: '#4caf50' }}>:</span>
      </Typography>


      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          maxWidth: '1200px', 
          padding: { xs: 2, md: 4 },
        }}
      >
        <Grid item xs={12}>
          <CardCertificado />
        </Grid>
      </Grid>
    </Box>
  );
}