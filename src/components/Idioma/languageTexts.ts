

export const languageTexts = {
    en: {
      menu:{
          buttonText: 'public/iconEUA.png',
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
          dispUrl: "View Project",
          dispCodeUrl: "View Code",
          indispUrl: "In development", 
          indispCodeUrl: "This project is in a private repository",
          naesquina:{
              title: "NaEsquina",
              resumo: "The naesquina project, currently under development, primarily aims to create advantages and facilitate connections between users and local establishments, offering an intuitive and efficient platform for everyone. For the backend, we utilized Java with Spring Boot to build a robust and scalable foundation, while the frontend was developed with ReactJS and TypeScript, ensuring a modern, reactive, and type-safe user interface. For visual components, we opted for the Shadcn UI library, resulting in an elegant and fully responsive design. We have already implemented crucial functionalities such as a unified login system for administrators, users, and establishments, alongside a comprehensive registration process for each profile type. One of the core features is the establishment search based on user location, which uses Google's Geocoding API for greater accuracy. All CRUD (Create, Read, Update, Delete) operations are functional, and we recently added a powerful fuzzy search capability with Apache Lucene, allowing users to find information even with slight variations in their search terms. naesquina continues to evolve, with new features and improvements being constantly integrated."
          },
          probem:{
              title: "Probem",
              resumo: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information."
          },
          maxlimp:{
              title: "Maxlimp",
              resumo: "'Maxlimp' is a complete e-commerce platform for cleaning products that allows customers to start their orders through the application and complete them via WhatsApp. On the other hand, the Administrator can monitor the entire process of orders, sales, and average ticket values through a dashboard visible only to the Admin. Additionally, the Admin can update order statuses, as well as add, update, and remove orders. Technically, it is a full-stack project. On the backend, there is an API built with Django, featuring complete CRUD functionality and using JWT tokens for user authentication. The frontend is developed with React, chosen for its component-based approach. For styling, the TailwindCSS library was used, along with some components from the Material-UI library to enhance responsiveness."
          },
          ignite:{
              title: "Ignite Project",
              resumo: "In the ignite project I learned how to use Vitejs better, which is faster and more flexible than Create-React-App, I also learned how to use css modules and understood iteration better, the application is a kind of feed with comments."
          },
          growthhub:{
            title: "Growth-hub",
            resumo: "The GrowthHub platform is designed for education and professional development, allowing users to access courses organized into modules. Users can take quizzes to test their knowledge, and certificates are issued only after completing all modules and achieving a minimum quiz score. Administrators can manage course materials, while managers can monitor their subordinates' performance. The platform uses modern technologies like Vite with React and TypeScript to ensure robust, efficient, and personalized experiences."
          },
          eco:{
            title: "EcoSwitch",
            resumo: "Eco Switch is a circular economy platform developed as part of an academic project for the Web Application Development (3DAW) course. Its main goal is to promote sustainability and reduce excessive consumption by facilitating product exchanges between users. The platform offers several features, including a complete user registration and login system with email confirmation, product listing and management for exchanges, an interactive interface for trade requests and negotiations, real-time chat via WebSockets, automatic notifications about interactions, paginated navigation for easier browsing of numerous products, product categorization, and a responsive design adapted to various screen sizes. On the frontend, the platform was built using HTML5, CSS3, and JavaScript, along with libraries such as jQuery (for DOM manipulation and AJAX requests), Socket.io Client (for real-time chat), GSAP (for advanced animations), and Font Awesome (for icons). The backend logic was implemented using PHP, a MySQL relational database, and a real-time chat server developed with Node.js and Socket.io. For sending confirmation emails, the PHPMailer library was used. The application infrastructure is hosted on AWS EC2, utilizing the Apache web server and the PM2 process manager to ensure the stability and performance of the Node.js server in a production environment."
          },
          flowork:{
            title: "Flowork",
            resumo: "Flowork is a mobile application developed for managing temporary jobs, aimed at freelancers, companies, and administrators. Built with React Native (using Expo Bare/Prebuild), the app uses technologies such as Axios, React Navigation, AsyncStorage, and Context API on the frontend, and NestJS, TypeORM, and PostgreSQL on the backend. Authentication is handled using JWT, supporting both traditional login (email and password) and Google Sign-In. Flowork’s main features include user registration and authentication, creation, editing, assignment, acceptance, completion, and review of jobs, as well as an admin panel for managing users and generating access tokens. Users can track their balance through an integrated wallet, request withdrawals via PIX, and view a transaction history. The app sends push notifications and transactional emails (such as account confirmation and password reset) and provides location-based filtering to find nearby jobs, with support for routes and real-time positioning. Jobs may include linked questionnaires that freelancers are required to complete. All updates occur in real time using WebSockets (Socket.io). The application follows best practices such as backend data validation, visual feedback on the frontend (with loaders, alerts, and modals), environment variable usage, and a modular architecture, delivering a secure, smooth, and efficient user experience."
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
        rn: "React Native is a framework for developing cross-platform mobile applications using JavaScript and React. It allows you to create native applications for iOS and Android with a single codebase, leveraging the reusable components of React.js.",
        php: "PHP is one of the world's most popular scripting languages, created specifically for web development. Its key feature is the ability to be embedded directly into HTML, allowing the server to process logic and deliver dynamic pages to the browser. It is the foundation for massive systems like WordPress and, with modern frameworks like Laravel and Symfony, it remains a powerful and relevant tool for creating everything from simple websites to complex applications.",
        kotlin: "Kotlin is a modern programming language from JetBrains, 100% interoperable with Java, designed to be safer and more concise. Officially adopted by Google, it is the preferred language for Android development and is also prominent in backend applications.",
        spring: "Spring Boot is a framework that accelerates Java application development by eliminating complex configurations. Through its principles of autoconfiguration, it analyzes project dependencies to automatically set up the application, and opinionated defaults, which provide intelligent settings from the start. This allows for the creation of standalone, production-ready applications in record time, complete with an embedded web server. For this reason, Spring Boot has become the standard tool for building microservices and RESTful APIs, allowing developers to focus on business logic instead of worrying about infrastructure.",

      },
      certificates: "Certificates",
      footer: "2023 David Balzarini. All rights reserved."
      
      
      
     
    },
    pt: {
      menu:{
          buttonText: 'public/brasilIcon.png',
          inicio: "Inicio",
          projects: "Projetos",
          instruction: "Conhecimentos",
          certificates: "Certificados",
          sobre: "about me"
      },
      inicio:{
          role: 'Desenvolvedor FullStack',
          programacao: "Javascript, Typescript, React.Js, Node.js, React Native, MySQL e Nest.js",
          curriculo: "Currículo",
          resume: "Me chamo David, tenho 21 anos e sou um desenvolvedor fullstack formado pela Generation Brasil, domino diversas tecnologias, como por exemplo ",
      },
      projects:{
          titulo: "Projetos em destaque",
          dispUrl: "Ver projeto",
          dispCodeUrl: "Ver Código",
          indispUrl: "Esse projeto está em desenvolvimento", 
          indispCodeUrl: "Esse projeto está em um repositório privado",
          naesquina:{
              title: "NaEsquina",
              resumo: "O projeto naesquina, atualmente em desenvolvimento, tem como objetivo principal criar vantagens e facilitar a conexão entre usuários e estabelecimentos locais, oferecendo uma plataforma intuitiva e eficiente para todos. No backend, utilizamos Java com Spring Boot para construir uma base robusta e escalável, enquanto o frontend foi desenvolvido com ReactJS e TypeScript, garantindo uma interface moderna, reativa e segura. Para os componentes visuais, optamos pela biblioteca Shadcn UI, resultando em um design elegante e totalmente responsivo. Já implementamos funcionalidades cruciais como um sistema de login unificado para administradores, usuários e estabelecimentos, além de um processo de registro completo para cada tipo de perfil. Uma das características centrais é a busca de estabelecimentos baseada na localização do usuário, que utiliza a API de Geocoding do Google para maior precisão. Todas as operações CRUD (Criação, Leitura, Atualização e Exclusão) estão funcionais, e recentemente adicionamos uma poderosa busca 'fuzzy' com Apache Lucene, permitindo que os usuários encontrem informações mesmo com pequenas variações nos termos pesquisados. O naesquina continua evoluindo, com novas funcionalidades e aprimoramentos sendo constantemente integrados."
          },
          probem:{
              title: "Probem",
              resumo: "Esse projeto utiliza as tecnologias ReactJS, Nest e MySQL. O objetivo é conectar pessoas em situações precárias que precisam de materiais de saúde, como cadeiras de rodas e muletas, com aqueles que podem doar esses itens. Com o ReactJS, oferecemos uma interface amigável e responsiva. O framework Nest nos permite criar um backend escalável e modular. Utilizamos o banco de dados MySQL para armazenar com segurança as informações relevantes."
          },
          ignite:{
              title: "Projeto Ignite",
              resumo: "no projeto ignite aprendi a utilizar melhor Vitejs que é mais rapido mais flexivel que o Create-React-App, tambem aprendi a usar css modules e entendi melhor a iteração, a aplicação é uma espécie de feed com comentários"
          },
          growthhub:{
            title: "Growth-hub",
            resumo: "A plataforma GrowthHub é projetada para educação e desenvolvimento profissional, permitindo que os usuários acessem cursos organizados em módulos. Os usuários podem realizar quizzes para testar seus conhecimentos, e os certificados são emitidos apenas após a conclusão de todos os módulos e a obtenção de uma pontuação mínima nos quizzes. Os administradores podem gerenciar materiais do curso, enquanto os gestores podem monitorar o desempenho de seus subordinados. A plataforma utiliza tecnologias modernas como Vite com React e TypeScript para garantir experiências robustas, eficientes e personalizadas."
          },
          maxlimp:{
            title: "Maxlimp",
            resumo: "'Maxlimp' é um ecommerce de produtos de limpeza completo, que permite o cliente iniciar o pedido pela aplicação e finalizar o pedido pelo whatsapp, já o Administrador ele pode acompanhar todo o processo de pedidos, vendas e tickets médios em um dashboard visivel apenas para o Adm, além disso pode alterar o status de pedidos, adicionar, atualizar e remover pedidos também. Tecnicamente é um projeto fullstack, no back temos uma api feita em Django com o CRUD completo e utilização token JWT para autenticação do usuario. Já o front é feito em React, escolhido por causa da sua abordagem baseada em componentes. Para estilização foi utilizado a biblioteca tailwindcss e alguns componentes da biblioteca material ui para facilitar a responsividade",
          },
          eco:{
            title: "EcoSwitch",
            resumo: "Eco Switch é uma plataforma de economia circular desenvolvida como parte do projeto acadêmico da disciplina de Desenvolvimento de Aplicações Web (3DAW). Seu principal objetivo é promover a sustentabilidade e reduzir o consumo excessivo por meio da troca de produtos entre usuários. A plataforma conta com diversas funcionalidades, como sistema completo de cadastro e login de usuários com confirmação por e-mail, anúncio e gerenciamento de produtos para troca, sistema interativo de solicitação e negociação de trocas, chat em tempo real via WebSockets, notificações automáticas sobre interações, navegação paginada para facilitar o acesso a muitos produtos, organização por categorias e design responsivo adaptado a diferentes dispositivos. No frontend, foram utilizadas as linguagens HTML5, CSS3 e JavaScript, além das bibliotecas jQuery (para manipulação do DOM e requisições AJAX), Socket.io Client (para o chat em tempo real), GSAP (para animações) e Font Awesome (para ícones). No backend, a lógica de negócio foi implementada em PHP, banco de dados MySQL e servidor de chat em tempo real desenvolvido com Node.js e Socket.io. Para o envio de e-mails de confirmação, foi usada a biblioteca PHPMailer. A infraestrutura da aplicação está hospedada na AWS EC2, utilizando o servidor web Apache e o gerenciador de processos PM2 para garantir estabilidade e desempenho do servidor Node.js em produção."
          },
          flowork:{
            title: "Flowork",
            resumo: "Flowork é uma aplicação mobile desenvolvida para gestão de trabalhos temporários, voltada para freelancers, empresas e administradores. Construída com React Native (usando Expo Bare/Prebuild), a aplicação utiliza tecnologias como Axios, React Navigation, AsyncStorage e Context API no frontend, e NestJS, TypeORM e PostgreSQL no backend. A autenticação é feita com JWT, oferecendo suporte a login tradicional (e-mail e senha) e login com Google Sign-In. Entre suas funcionalidades, o Flowork permite o cadastro e autenticação de usuários, a criação, edição, atribuição, aceitação, finalização e revisão de trabalhos, além de um painel administrativo com controle de usuários e geração de tokens de acesso. Os usuários podem acompanhar o saldo em uma carteira integrada, solicitar saques via PIX e acessar um histórico de transações. A aplicação envia notificações push e e-mails transacionais (como confirmação de conta e redefinição de senha) e oferece filtros por geolocalização para encontrar trabalhos próximos, com suporte a rotas e localização em tempo real. Trabalhos podem incluir questionários vinculados, que freelancers devem responder ao completá-los. Todas as atualizações são feitas em tempo real com uso de WebSockets (Socket.io). A aplicação também adota boas práticas como validação de dados no backend, feedback visual no frontend (com loaders, alerts e modais), uso de variáveis de ambiente e uma arquitetura modular, proporcionando uma experiência segura, fluida e eficiente."
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
        rn: "React Native é um framework para o desenvolvimento de aplicativos móveis multiplataforma usando JavaScript e React. Ele permite criar aplicativos nativos para iOS e Android com uma única base de código, aproveitando os componentes reutilizáveis do React.js.",
        kotlin: "Kotlin é uma linguagem de programação moderna da JetBrains, 100% interoperável com Java, projetada para ser mais segura e concisa. Adotada oficialmente pelo Google, é a linguagem preferida para o desenvolvimento Android, destacando-se também em aplicações backend.",
        spring: "O Spring Boot é um framework que acelera o desenvolvimento de aplicações em Java ao eliminar configurações complexas. Através de seus princípios de autoconfiguração, ele analisa as dependências do projeto para configurar a aplicação automaticamente, e de opiniões formadas, que oferecem padrões inteligentes desde o início. Isso permite criar aplicações independentes e prontas para produção em tempo recorde, já com um servidor web embutido. Por essa razão, o Spring Boot se tornou a ferramenta padrão para a construção de microserviços e APIs RESTful, permitindo que os desenvolvedores foquem na lógica de negócio em vez de se preocuparem com a infraestrutura",
        php: "PHP é uma das linguagens de script mais populares do mundo, criada especialmente para o desenvolvimento web. Sua principal característica é a capacidade de ser embutida diretamente no HTML, permitindo que o servidor processe a lógica e entregue páginas dinâmicas ao navegador. É a base de sistemas gigantes como o WordPress e, com frameworks modernos como Laravel e Symfony, continua sendo uma ferramenta poderosa e relevante para criar desde sites simples até aplicações complexas.",
      },
      certificates: "Certificados",
      footer: "2023 David Balzarini. Todos os direitos reservados." 
    },
  };