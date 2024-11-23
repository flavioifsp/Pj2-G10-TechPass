# TECHPASS - Sistema de Gerenciamento para Empresa de Ônibus

<p align="center">
  <a href="https://axios-http.com/" target="_blank">
    <img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios" alt="Axios"/>
  </a>
  <a href="https://getbootstrap.com/" target="_blank">
    <img src="https://img.shields.io/badge/Bootstrap-CSS%20Framework-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap"/>
  </a>
  <a href="https://ejs.co/" target="_blank">
    <img src="https://img.shields.io/badge/EJS-Template%20Engine-8BC500?style=for-the-badge&logo=ejs" alt="EJS"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-Linguagem-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  </a>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Express-Web%20Framework-000000?style=for-the-badge&logo=express" alt="Express"/>
  </a>
  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma"/>
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql" alt="MySQL"/>
  </a>
  <a href="https://www.npmjs.com/package/bcryptjs" target="_blank">
    <img src="https://img.shields.io/badge/Bcrypt.js-Security-00C7B7?style=for-the-badge&logo=lock" alt="Bcrypt.js"/>
  </a>
  <a href="https://jwt.io/" target="_blank">
    <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens" alt="JWT"/>
  </a>
  <a href="https://www.npmjs.com/package/multer" target="_blank">
    <img src="https://img.shields.io/badge/Multer-File%20Upload-FF6F00?style=for-the-badge&logo=upload" alt="Multer"/>
  </a>
</p>

> Este projeto foi desenvolvido enquanto estávamos aprendendo o básico, por isso várias boas práticas não foram seguidas. Os outros projetos que desenvolvemos tem uma qualidade superior.

## Descrição

O **TechPass** é uma solução de gestão de transporte público, desenvolvida entre **agosto a novembro de 2023** como parte do **Projeto Integrado** do curso de [Informática para Web](https://www.ifspcaraguatatuba.edu.br/cursos/tecnico/tecnico-em-informatica-para-internet). Seu objetivo é automatizar e otimizar a gestão de passageiros, operações e frota, oferecendo uma experiência eficiente para passageiros e colaboradores (administradores, motoristas e atendentes).

O sistema é composto por três módulos principais:

1. **Site Público**: Portal para consulta de linhas, horários, pontos de ônibus, histórico de viagens, saldo e recarga de cartões.  
2. **Painel Administrativo**: Plataforma para gerenciar usuários, viagens, dados operacionais e tipos de cartões.  
3. **Catraca Eletrônica com RFID**: Sistema automatizado de controle de embarques, validando passageiros com tecnologia RFID.
   
## Funcionalidades

#### 1. Site Público (Passageiros)

- **Localização de Lojas**: Mapa interativo com a localização das lojas de atendimento, utilizando API do Google Maps.  
  ![Rolando a página inicial do site público onde está o mapa](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/31cb76ff17bf7f7bbd7ebfc93e1c3171d655cb35/index_public.gif)
- **Consulta de Linhas e Horários**: Visualização de trajetos, horários e pontos de parada. ![apresentando pagina onde mostra as linhas](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/7ce853581a380157cd72146b2103ab83a273f1ca/linhas.gif)
- **Histórico de Viagens e Saldo**: Acompanhamento do saldo e histórico de viagens realizadas.  
- **Recarga de Cartões**: Recarga de cartões de transporte diretamente pelo site.
  ![mostrando área de login; histórico e recarga no site público](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/4da0f67a81abda8a71f0f4babfc313df3726d3c5/recargaEhistorico_publico.gif)

---

### 2. Painel Administrativo

O **Painel Administrativo** organiza suas funcionalidades com base no tipo de conta, atribuindo permissões específicas a cada perfil de usuário. A seguir, detalhamos as ferramentas disponíveis para cada perfil:

#### Para Administradores
  ![apresentando a parte adminstrativa pela conta de adm](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/0b520da5ab1eacf23428787d51772da6ea0f2f2f/adm_adm.gif)

- **Gestão de Usuários**: Criação, edição e remoção de contas de motoristas, atendentes e passageiros.  
- **Cadastro de Lojas**: Gerenciamento de lojas vinculadas aos atendentes, facilitando o controle de operações.  
- **Cadastro de Tipos de Cartões**: Definição de tipos de cartões com taxas variáveis.  
- **Dashboard Operacional**: Exibição de dados como viagens realizadas, frotas em operação, motoristas e atendentes.

#### Para Atendentes
  ![apresentando a parte adminstrativa pela conta de uma atendente](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/4ea5b93036b01b3a68c77c13e6fc62a3389354b6/adm_atendente.gif)

- **Gestão de Contas de Usuários**: Criação e edição de contas de passageiros e recarga de cartões.  
- **Emissão de Cartões**: Criação de novos cartões com base nos tipos cadastrados pelo administrador.  

#### Para Motoristas
 ![apresentando um motorista iniciando uma viagem e a catraca em diferentes telas](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/f1d04d06aa45993716e3fafea68511fcc80f9d0b/adm_motorista-catraca.gif)

- **Controle de Viagens**: Registro do início e término das viagens com monitoramento em tempo real.
- **Validação de Cartões**: Controle automatizado de embarques via tecnologia RFID. 
- **Monitoramento em Tempo Real**: Registro de embarques e associação ao motorista e viagem correspondente.  


## Guia de Instalação e Acesso 

### Como rodar a aplicação ▶️
1. **Clone o repositório**:
    ```sh
    git clone https://github.com/flavioifsp/Pj2-G10-TechPass.git
    ```

2. **Entre na pasta do projeto**:
    ```sh
    cd Pj2-G10-TechPass
    ```

3. **Inicie os containers**:
    > Certifique-se de que o Docker esteja instalado em sua máquina!
    ```sh
    docker compose up
    ```

5. **Teste o sistema** 👍

### Áreas do Sistema

- **Acesso Público**: [http://localhost:3000/](http://localhost:3000/)
- **Painel Administrativo**: [http://localhost:3000/adm](http://localhost:3000/adm)
- **Catraca**: [http://localhost:3000/catraca?onibus=ID_DO_ONIBUS](http://localhost:3000/catraca?onibus=ID_DO_ONIBUS)  
  (Substitua **ID_DO_ONIBUS** pelo ID de um ônibus válido)

### Contas de Teste

| **Onde Usar**      | **Tipo de Usuário** | **Email**                 | **Senha**   |
|--------------------|---------------------|---------------------------|-------------|
| **Site Público**   | Cliente             | cliente@example.com        | 12345678    |
| **Painel Admin**   | Administrador (Adm) | gerente@techpass.com       | senha123    |
| **Painel Admin**   | Atendente           | atendente@gmail.com        | 12345678    |
| **Painel Admin**   | Motorista           | motorista@gmail.com        | 12345678    |

## Tecnologias e Bibliotecas Utilizadas :books:

- [Axios](https://axios-http.com/) - Biblioteca para fazer requisições HTTP
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para design responsivo e componentes de interface
- [EJS](https://ejs.co/) - Motor de template para renderização de páginas no servidor
- [Express](https://expressjs.com/) - Framework para construção de servidores web em Node.js
- [Prisma](https://www.prisma.io/) - ORM para manipulação de banco de dados
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Biblioteca para hash de senhas de forma segura
- [JSON Web Token (JWT)](https://jwt.io/) - Biblioteca para criação e validação de tokens JWT
- [Multer](https://www.npmjs.com/package/multer) - Middleware para upload de arquivos em Node.js


## Desenvolvedores :octocat:

| [<img src="https://avatars.githubusercontent.com/u/132392161?v=4" width=115><br><sub>Leonardo L. Felix</sub>](https://github.com/6aleatorio6) | [<img src="https://avatars.githubusercontent.com/u/141774746?v=4" width=115><br><sub>Flavio Menezes Leite</sub>](https://github.com/flavioifsp) |
| :---: | :---:
