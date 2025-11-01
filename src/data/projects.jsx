export const projects = [
  {
    id: 1,
    slug: "projeto-minitela",
    titulo: "Projeto Minitela Embarcada",
    imagem: "/imgs/minitela.png",
    resumo: "Um aplicativo desenvolvido em C#, NodeJs, React e Electron para comunicação de uma minitela embarcada se comunicar com um software desenvolvido nas versões windows e linux",
    conteudo: `
      <h2>Descricao projeto</h2>
      <p>Texto projeto</p>
      <img src="/imgs/minitela.png"/>
      <p>Novo texto projeto</p>
    `,
    links: [
      { label: "Link do produto lançado oficialmente na loja Positivo", url: "https://loja.meupositivo.com.br/notebook-positivo-vision-r15m-amd-ryzen-7-5825u-linux-8gb-ram-256gb-ssd-wi-fi-6-15-full-hd-ips-minitela-preto-3003077/p" },

    ]
  },
  {
    id: 2,
    slug: "site-institucional",
    titulo: "Site Institucional",
    imagem: "/imgs/policorp.png",
    resumo: "Site Institucional desenvolvido em Javascript, Vue e Nodejs, para a empresa Policorp Tecnologia, este site possui um total de 10 páginas, contendo integrações de APIs, conexões com serviços de envio de email, envio de formulários e integrações em banco de dados",
    conteudo: `
      <p>Site Institucional desenvolvido em Javascript, Vue e Nodejs, para a empresa Policorp Tecnologia, este site possui um total de 10 páginas, contendo integrações de APIs, conexões com serviços de envio de email, envio de formulários e integrações em banco de dados, foi um projeto em que desenvolvi na empresa onde estou trabalhando atualmente.</p>

      <p>O objetivo deste projeto era renovar o site por completo, site que foi desenvolvido em JOOMLA, porem com um visual mais moderno e estilizado, porém eu optei por sugerir uma solução diferente, que seria criar um site desde o inicio, dessa vez com uma documentação técnica, linguagem, framework e de fácil manutenção, e então seguimos com está ideia</p>

      <h2>Apresentação do site</h2> <br> <br> <br>

      <img src="/imgs/site-policorp/form-curriculo.png" class="detail-img"/>
      <img src="/imgs/site-policorp/form-contato.png" class="detail-img"/>
      
      <img src="/imgs/site-policorp/blogs.png" class="detail-img"/>
      
      <img src="/imgs/site-policorp/chatbot.png" class="detail-img"/>

      <p>Novamente explicando sobre o desenvolvimento, eu utilizei VueJs como base para este projeto, seguindo regras de estilização com CSS, e separando a estruração do site por blocos, cada um desses blocos recebiam determina informação, para isso utilizei da estruturação MVC.</p>

      

      <p>Sobre as principais funcionalidades do site se encontram: ChatBot Interativo, Formulários de Contato e Formulário de envio de curriculo e Blogs.</p>

      

      <p>Para o desenvolvimento do backend, foram criadas 3 APIs, sendo elas, API DialogFlow, API Contatos e API Blogs, todas essas APIs foram armazenadas em um servidor no google cloud e posteriormente adicionado um subdominio para integração ao site como requisições HTTPS.</p>



      <p>E por fim foi criado uma documentação completa do projeto ensinando e explicação a utilização do código e quais padrões de desenvolvimento devem ser seguidos.</p>



      <p>Finalizando todas etapas acima, foi necessario criar um configuração em nosso servidor interno para hospedagem do front-end, e utilizei como recurso principal o NGINX</p>
       
      
      <p>Na página principal podemos verificar todos os serviços, valores e tempo para execução.</p>

      <br>
    `,
    links: [
      { label: "https://www.policorp.com.br", url: "https://www.policorp.com.br" },

    ]
  },
  {
    id: 3,
    slug: "lash-designer",
    titulo: "Site Lash Designer",
    imagem: "/imgs/site-lash/visao1.png",
    resumo: "O site Lash Designer foi um site desenvolvido sob uma parceria sem objetivos financeiros",
    conteudo: `
      <h2>O site Lash Designer foi um site desenvolvido sob uma parceria sem objetivos financeiros</h2>
      <p>O objetivo do site seria os clientes poderem realizar agendamentos de horarios para algum serviço oferecido, com as opções de dias disponiveis no agendamento e também horarios, também foi criado um dashboard "Painel de admin" que ali podemos verificar as informações dos agendamentos, faturamento estimizado com base no serviço oferecido e também uma opção para adicionar, editar e/ou remover algum serviço/produto</p> 
      
      <br>

      <h2>Visualização de produtos:</h2>
      <img src="/imgs/site-lash/servicos.png" class="detail-img"/>
      <p>Na página principal podemos verificar todos os serviços, valores e tempo para execução.</p>

      <br>

      <h2>Rota de agendamentos:</h2>
      <img src="/imgs/site-lash/agendar.png" class="detail-img"/>
      <p>Acima podemos selecionar o serviço oferecido, escolher um horario com base nas horas disponiveis, completar informações pessoais e adicionar observações</p>
      
      <br>

      <h2>Login de usuario:</h2>

      <img src="/imgs/site-lash/login.png" class="detail-img"/>
      <p>Foi criado um sistema de login exclusivo para o administrador do site, para que ele possa acessar/alterar as informações de seus produtos.</p>

      <br>

      <h2>Painel de Admin:</h2>
      <img src="/imgs/site-lash/painel-admin.png" class="detail-img"/>
      <p>Nesta sessão é onde ficam todas as informações de interesse do fornecedor, aqui podemos visualizar os agendamentos, criar/editar serviços e verificar faturamento liquido e bruto.</p>

      <br>

      <h2>Agendamentos realizados:</h2>
      <img src="/imgs/site-lash/agendamentos.png" class="detail-img"/>
      <p>Aqui ficam todas informações de cada agendamento, e com opções de selecionar o estado atual do agendamento, se ja foi concluido, confirmado, cancelado ou concluído.</p>

      <br>

      <h2>Criação e edição de serviços:</h2>
      <img src="/imgs/site-lash/add-editar-produto.png" class="detail-img"/>
      <p>Bom, aqui é onde podemos adicionar, atualizar ou remover algum serviço.</p>

      <br>

      <h2>Rota edição do produto:</h2>
      <img src="/imgs/site-lash/editar-produto.png" class="detail-img"/>
      <p>Nesta rota temos a visualização e as configurações de nosso produto/serviço, e finalizando as alterações basta clicar em "Atualizar" .</p>

      <br>

      <h2>Painel financeiro:</h2>
      <img src="/imgs/site-lash/margem.png" class="detail-img"/>
      <p>E por fim, temos a rotas de controle de finanças, aqui podemos verificar qual foi o faturamento bruto de todos os produtos, os custos dos materias e também o faturamento liquido geral.</p>

      <br>

      <p>E este foi o desenvolvimento do site Lash Designer, estou em fase de implementação final de algumas funcionalidades para envio de email de confirmação de agendamentos e também rotas para envio de mensagens via whatsapp, mas em breve o projeto será disponibilizado na web, já embarcado em um servidor + dominio</p>

      <strong> Agradeço por toda a atenção aos detalhes do meu projeto, fico muito feliz em saber que meu trabalho vem sendo reconhecido por outras pessoas! </strong>

      <br> <br>

      <strong class="red-strong">Como o projeto foi criado sem inteções lucrativas, eu disponibilizei todo seu código fonte em meu github!</strong>
    `,
    links: [
      { label: "https://github.com/Erick-bonfati/SiteLash", url: "https://github.com/Erick-bonfati/SiteLash" },

    ]
  },
  {
    id: 4,
    slug: "central-de-estudos",
    titulo: "Central de Estudos",
    imagem: "/imgs/central-estudos/visao1.png",
    resumo: "O projeto Central de Estudos foi desenvolvido com objetivo de ajudar os estudantes utilizando um timer pomodoro e também na criação de tarefas e objetivos.",
    conteudo: `
      <h2>O projeto Central de Estudos foi desenvolvido com objetivo de ajudar os estudantes utilizando um timer pomodoro e também na criação de tarefas e objetivos."</h2>
      <p>Este projeto foi desenvolvido por mim, com objetivo de me auxiliar em meus estudos diarios utilizando a métodologia pomorodo e também para me auxiliar com criação de anotações de estudos e cards a ser estudados, também existe um gráfico para exibir quantas horas-minutos foram estudados em cada dia da semana e também o total de horas na semana, posteriormente este projeto foi posto como público em meu repositório para caso qualquer um timer interesse em usar está métodologia.</p>

      <strong>O projeto foi desenvolvido com React + Vite + NodeJs(Backend), seguindo estrutura MVC, boas pratícas de programação e estilização responsiva.</strong>
      <h2>Apresentação projeto</h2>
      <img src="/imgs/central-estudos/pomodoro.png" class="detail-img"/>

      <p>Iniciando pelo timer pomodoro, foram criados lógicas para Iniciar, pausar, alterar timers entre "trabalho, pausa curta e pausa longa" e assoiar uma tarefa a este timer.</p>

      <p>Também foram adicionados efeitos sonoros para quando restar somente 5 minutos para finalizar o timer, para quando pausar o timer e quando encerrar.</p>

      <img src="/imgs/central-estudos/cards-pomodoro.png" class="detail-img"/>

      <p>Ao adicionar uma nova tarefa, você deve ver os cards da tarefa que iniando vazio e a partir disso você pode ir adicionando quantos cards desejar com base na quantidade de etapas que será realizada dentro desta tarefa.</p>

      <p>E ao clicar em concluir, esta tarefa será marcada como concluida e não será mais possivel de ser visualização em Tarefas.</p>

      <h2> Tela anotações </h2>

      <img src="/imgs/central-estudos/mostrar-tarefas-terminadas.png" class="detail-img"/>

      <p>Na página "Anotações" você conseguirá visualizar todas suas tarefas concluidas, sendo possivel exclui-lás da base de dados ou não, e caso não tenha interesse em saber quais tarefas já foram concluidas, você pode selecionar a opção "Ocultas Concluídas"

      <p> Nesta mesma paginá podemos adicionar uma anotação exatamente igual a página pomodoro e também com as opções de adicionar cards, e caso todos cards estejam marcados como concluídos, você pode concluir a tarefa.</p>
      
      <img src="/imgs/central-estudos/nova-nota.png" class="detail-img"/>
      <img src="/imgs/central-estudos/tarefas-feitas.png" class="detail-img"/>

      <h2>Sistema de Logins e Registro</h2>

      <p>Foi criado também um sistema de login para usuarios, dessa maneira podemos salvar todas tarefas individuais de cada um, sem necessidade de salvar os dados na memória do navegador, sendo este login valido durante uma semana antes de precisar realizar um login novamente.</p>

      <img src="/imgs/central-estudos/login.png" class="detail-img"/>

      <p>Logo abaixo das informações de login também temos o encaminhando para cadastro de usuário caso este usuario não tiver uma conta.</p>

      <img src="/imgs/central-estudos/registrar.png" class="detail-img"/>

      <h2> Registro de tempo de atividade </h2>

      <p> Por fim foi adicionado uma funcionalidade que será um gráfico para visualizar as horas/minutos estudados e também sequencia de dias e total de tempo estudado na semana, esta informação se encontra disponivel na página timer pomodoro, logo após o usuario efetuar o login de seu usuario.</p>

      <img src="/imgs/central-estudos/resumo-atividades.png" class="detail-img"/>

      <p>E este foi o projeto Central de Estudos, ainda estou em fase de implementação deste projeto, será adicionado uma nota rota para verificar todo o progresso de tarefas e associar cada tarefa com o timer pomorodo, então ainda existem algumas novidades por vir.</p>
    `,
    links: [
      { label: "https://github.com/Erick-bonfati/Central-estudos", url: "https://github.com/Erick-bonfati/Central-estudos" },

    ]
  },
  {
    id: 5,
    slug: "modelo-web-react",
    titulo: "Site ModeloWebReact",
    imagem: "/imgs/modeloweb/visao1.png",
    resumo: "Este foi um site modelo em que desenvolvi, com o objetivo de facilitar a criação de novos projetos com um modelo avançado em termos de estruturação",
    conteudo: `
      <h2>Este foi um site modelo em que desenvolvi, com o objetivo de facilitar a criação de novos projetos com um modelo avançado em termos de estruturação</h2>
      <p>O projeto ModeloWebReact foi muito util para mim, pois com ele pude avançar em diversos projetos, sem a necessidade de criar toda estrutura MVC toda vez que criasse um novo projeto e também ja continha informações muito valiosas, como registro/login de usuario, configuração de rotas, separando de arquivo backend e estilização responsiva.</p>
      
      <br>

      <p> O projeto foi desenvolvido em <strong>React + Vite + NodeJs(backend)</strong>, e para o banco de dados foi utilizado o MongoDb.</p> 

      <br>

      <h2>Apresentação das funcionalidades:</h2>

      <p>Pela página Dashboard, para acessar ela foi criado um bloqueio na rota, e para permitir o acesso, o usuario deve registar e depois logar em sua conta: </p>


      <img src="/imgs/modeloweb/dashboard.png" class="detail-img"/>

      <br>

      <p>Acessando a de registro temos uma interface muito simples, porem funcional, redirecionando para rota de login assim que o usuario é registrado,essa configuração foi feito utilizando MongoDb</p>

      <img src="/imgs/modeloweb/registro.png" class="detail-img"/>

      <p>E na rota de login basta apenas digitar seu usuario e senha e você será encaminhado para a rota de dashboard novamente, onde agora terá acesso ao conteudo dentro dela:</p>

      <img src="/imgs/modeloweb/login.png" class="detail-img"/>

      <p> E por fim, com o usuario logado podemos ver as informações da rota dashboard.</p>
      <strong>Obs.: O login de usuario fica salvo em cache na memória por 7 dias até ser necessario realizar um login novamente.</strong>

      <br> <br>

      <img src="/imgs/modeloweb/dashboard-logado.png" class="detail-img"/>

      <br>

      <p>E este foi o projeto ModeloWebReact que desenvolvi, é um projeto muito simples em comparação aos meus outros desenvolvimentos, mas foi certamente um projeto que me auxiliou muito no dia a dia.</p>

      <p>Agradeço pela leitura e espero que tenha gostado!</p>

    `,
    links: [
      { label: "https://github.com/Erick-bonfati/ModeloWebReact", url: "https://github.com/Erick-bonfati/ModeloWebReact" },

    ]
  },
  {
    id: 6,
    slug: "projeto-estudos-javascript-react",
    titulo: "Projeto de Estudos Javascript/React",
    imagem: "/imgs/colocarImagem.png",
    resumo: "Estes são dois repositórios de estudos que fiz durante minha trajetoria de estudos sobre o React e Javascript, aqui nós encontramos diversos modulos de estudos e também outros metodos e integrações do React + Vite",
    conteudo: `
      <h2>Descricao projeto</h2>
      <p>Texto projeto</p>
      <img src="/imgs/minitela.png"/>
      <p>Novo texto projeto</p>
    `,
    links: [
      { label: "Link Projeto", url: "https://github.com/Erick-bonfati/React" },
      { label: "Link Projeto", url: "https://github.com/Erick-bonfati/Javascript" },
    ]
  },
  
];