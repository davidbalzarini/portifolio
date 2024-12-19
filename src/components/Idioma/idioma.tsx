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
        resume: "My name is David, I'm 21 years old and I'm a fullstack developer trained in the Genaration Brasil, I master several technologies, such as ",
    },
    projects:{
        titulo: "Featured Projects",
        project1:{
            title: "Probem",
            resumo: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information."
        },
        project2:{
            title: "Maxlimp",
            resumo: "'Maxlimp' is a complete e-commerce platform for cleaning products that allows customers to start their orders through the application and complete them via WhatsApp. On the other hand, the Administrator can monitor the entire process of orders, sales, and average ticket values through a dashboard visible only to the Admin. Additionally, the Admin can update order statuses, as well as add, update, and remove orders. Technically, it is a full-stack project. On the backend, there is an API built with Django, featuring complete CRUD functionality and using JWT tokens for user authentication. The frontend is developed with React, chosen for its component-based approach. For styling, the TailwindCSS library was used, along with some components from the Material-UI library to enhance responsiveness."
        },
        project3:{
            title: "Ignite Project",
            resumo: "In the ignite project I learned how to use Vitejs better, which is faster and more flexible than Create-React-App, I also learned how to use css modules and understood iteration better, the application is a kind of feed with comments."
        },
        project4:{
          title: "Growth-hub",
          resumo: "The GrowthHub platform is designed for education and professional development, allowing users to access courses organized into modules. Users can take quizzes to test their knowledge, and certificates are issued only after completing all modules and achieving a minimum quiz score. Administrators can manage course materials, while managers can monitor their subordinates' performance. The platform uses modern technologies like Vite with React and TypeScript to ensure robust, efficient, and personalized experiences."
        }
    },
    conhecimentos:{
      titulo: "Instruction",
      none: '*hover over a skill.*',
      js: "JavaScript is a widely used high-level programming language for creating interactivity and dynamism on web pages. It runs in users' browsers and enables the creation of both front-end and back-end applications.",
      ts: "TypeScript is a programming language that adds static typing features to JavaScript. It provides a safer and more productive development environment by enabling the detection of code errors at compile time. TypeScript is compiled to JavaScript and is widely used in complex projects.",
      node: "Node is a JavaScript runtime environment that allows the execution of JavaScript code on the server side. It is built with Google Chrome's V8 engine and provides a scalable and efficient development environment for creating web applications and APIs.",
      react: "React is a popular JavaScript library for creating user interfaces (UI). React.js enables the construction of reusable components and provides a declarative approach to creating interactive and responsive interfaces. It is widely used for building single-page web applications (SPAs).",
      nest: "Nest is a framework for Node.js that provides a modular and scalable structure for building robust backend applications. It utilizes dependency injection architecture and the object-oriented design pattern to facilitate the development and maintenance of applications.",
      html:"HTML is the standard markup language for creating web pages. It defines the structure and content of the page, allowing the markup of elements such as headings, paragraphs, images, links, and more. HTML is interpreted by browsers to render web content.",
      css: "CSS is a style language used to define the appearance and layout of elements on a web page. It allows the definition of styles such as colors, fonts, sizes, positioning, and animations, making it possible to customize the appearance of HTML elements.",
      rn: "React Native is a framework for developing cross-platform mobile applications using JavaScript and React. It allows you to create native applications for iOS and Android with a single codebase, leveraging the reusable components of React.js."
    },
    certificates: "Certificates",
    footer: "2023 David Balzarini. All rights reserved."
    
    
    
   
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
        resume: "Me chamo David, tenho 21 anos e sou um desenvolvedor fullstack formado pela Generation Brasil, domino diversas tecnologias, como por exemplo ",
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
        project4:{
          title: "Growth-hub",
          resumo: "A plataforma GrowthHub é projetada para educação e desenvolvimento profissional, permitindo que os usuários acessem cursos organizados em módulos. Os usuários podem realizar quizzes para testar seus conhecimentos, e os certificados são emitidos apenas após a conclusão de todos os módulos e a obtenção de uma pontuação mínima nos quizzes. Os administradores podem gerenciar materiais do curso, enquanto os gestores podem monitorar o desempenho de seus subordinados. A plataforma utiliza tecnologias modernas como Vite com React e TypeScript para garantir experiências robustas, eficientes e personalizadas."
        }
    },
    conhecimentos:{
      titulo: "Conhecimentos",
      none: '*passe o mouse por cima de alguma habilidade*',
      js: 'JavaScript é uma linguagem de programação de alto nível amplamente utilizada para criar interatividade e dinamismo em páginas web. É executada nos navegadores dos usuários e permite a criação de aplicações front-end e back-end.',
      ts: "O typeScript é uma linguagem de programação que adiciona recursos de tipagem estática ao JavaScript. Ela oferece um desenvolvimento mais seguro e produtivo, permitindo a detecção de erros de código em tempo de compilação. O TypeScript é compilado para JavaScript e é amplamente usado em projetos complexos.",
      node: "Node é um ambiente de tempo de execução JavaScript que permite a execução de código JavaScript no lado do servidor. Ele é construído com o mecanismo V8 do Google Chrome e fornece um ambiente de desenvolvimento escalável e eficiente para a criação de aplicativos web e APIs.",
      react: "React é uma biblioteca JavaScript popular para a criação de interfaces de usuário (UI). O React.js permite a construção de componentes reutilizáveis e oferece uma abordagem declarativa para a criação de interfaces interativas e responsivas. É amplamente utilizado para criar aplicativos web de página única (Single-Page Applications).",
      nest: "Nest é um framework para Node.js que fornece uma estrutura modular e escalável para a construção de aplicativos back-end robustos. Ele utiliza a arquitetura de injeção de dependência e o padrão de design orientado a objetos para facilitar o desenvolvimento e a manutenção de aplicativos.",
      html:"HTML é a linguagem de marcação padrão para a criação de páginas web. Ela define a estrutura e o conteúdo da página, permitindo a marcação de elementos como títulos, parágrafos, imagens, links e muito mais. O HTML é interpretado pelos navegadores para renderizar o conteúdo web.",
      css: "CSS é uma linguagem de estilo utilizada para definir a aparência e o layout dos elementos em uma página web. Ela permite a definição de estilos como cores, fontes, tamanhos, posicionamento e animações, tornando possível personalizar a aparência dos elementos HTML.",
      rn: "React Native é um framework para o desenvolvimento de aplicativos móveis multiplataforma usando JavaScript e React. Ele permite criar aplicativos nativos para iOS e Android com uma única base de código, aproveitando os componentes reutilizáveis do React.js."
    },
    certificates: "Certificados",
    footer: "2023 David Balzarini. Todos os direitos reservados." 
  },
};



export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    
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
