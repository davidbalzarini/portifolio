import React, { createContext, useEffect, useState } from 'react';

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};



export const languageTexts = {
  en: {
    menu:{
        buttonText: 'public\iconEUA.png',
        inicio: "Home",
        projects: "Projects",
        instruction: "Instruction",
        certificates: "Certificates",
        sobre: "about me"
    },
    inicio:{
        role: 'Fullstack Developer',
        programacao: "Javascript, Typescript, React.Js, Node.js, React Native, MySQL and Nest.js",
        curriculo: "Resume",
        resume: "My name is David, I'm 19 years old and I'm a fullstack developer trained in the Genaration Brasil, I master several technologies, such as ",
    },
    projects:{
        titulo: "Featured Projects",
        project1:{
            title: "Probem",
            resumo: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information."
        },
        project2:{
            title: "Personal Blog",
            resumo: "“Personal blog” is a project I created to train my frontend and backend skills. For the frontend, I used Reactjs and for the backend, I used Nestjs. Also, I used SQL for the database. The website allows users to make posts, edit posts, delete posts, create users, log in and delete logins as well."
        },
        project3:{
            title: "Ignite Project",
            resumo: "In the ignite project I learned how to use Vitejs better, which is faster and more flexible than Create-React-App, I also learned how to use css modules and understood iteration better, the application is a kind of feed with comments."
        },
    },
    
    
    
   
  },
  pt: {
    menu:{
        buttonText: 'C:\Users\GenBr98\Documents\frontend\React\portifolio\public\brasilIcon.png',
        inicio: "Inicio",
        projects: "Projetos",
        instruction: "Conhecimentos",
        certificates: "Certificados",
        sobre: "about me"
    },
    Inicio:{
        role: 'Desenvolvedor FullStack',
        programacao: "Javascript, Typescript, React.Js, Node.js, React Native, MySQL e Nest.js",
        curriculo: "Currículo",
        resume: "Me chamo David, tenho 19 anos e sou um desenvolvedor fullstack formado pela Generation Brasil, domino diversas tecnologias, como por exemplo ",
    },
    projects:{
        titulo: "Projetos em destaque",
        project1:{
            title: "Probem",
            resumo: "Esse projeto utiliza as tecnologias ReactJS, Nest e MySQL. O objetivo é conectar pessoas em situações precárias que precisam de materiais de saúde, como cadeiras de rodas e muletas, com aqueles que podem doar esses itens. Com o ReactJS, oferecemos uma interface amigável e responsiva. O framework Nest nos permite criar um backend escalável e modular. Utilizamos o banco de dados MySQL para armazenar com segurança as informações relevantes."
        },
        project2:{
            title: "Blog pessoal",
            resumo: "“blog pessoal” é um projeto que eu criei para treinar minhass habilidades em frontend e backend. Para o frontend, usei Reactjs e para o backend, usei Nestjs. Além disso, eu usei SQL para o banco de dados. O site permite que os usuários façam postagens, editem postagens, excluam postagens, criem usuários, façam login e delete logins também."
        },
        project3:{
            title: "Projeto Ignite",
            resumo: "no projeto ignite aprendi a utilizar melhor Vitejs que é mais rapido mais flexivel que o Create-React-App, tambem aprendi a usar css modules e entendi melhor a iteração, a aplicação é uma espécie de feed com comentários"
        },
    }, 
  },
};

// const updateTexts = (selectedLanguage: string) => {
//   // Atualizar todos os textos na aplicação de acordo com o idioma selecionado
//   document.getElementById('role').innerText = languageTexts[selectedLanguage].role;
//   document.getElementById('button').innerText = languageTexts[selectedLanguage].buttonText;
// };

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    // Aqui você pode implementar a lógica para mudar o idioma em toda a aplicação, como alterar os textos exibidos
    // por exemplo, poderia ser feito através de um serviço de tradução ou arquivos de idioma
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'pt' ? 'en' : 'pt')); // Alternar entre inglês e espanhol
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
