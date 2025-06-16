import React, { createContext, useEffect, useState } from 'react';

type LanguageContextType = {
  language: 'en' | 'pt';
  toggleLanguage: () => void;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};


export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {console.log('Idioma alterado')},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('pt');

  useEffect(() => {
    console.log(`Idioma alterado para: ${language}`);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  const languageContextValue: LanguageContextType = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
