# TECHPASS - Sistema de Gerenciamento para Empresa de Ônibus
> O Código está um pouco desorganizado por ser o nosso primeiro projeto.

<p align="center">
  <a href="https://ejs.co/" target="_blank">
    <img src="https://img.shields.io/badge/EJS-Template%20Engine-8BC500?style=for-the-badge&logo=ejs" alt="EJS"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-Linguagem-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  </a>
  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma"/>
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql" alt="MySQL"/>
  </a>
</p>


## Descrição do projeto

**TechPass** é um sistema desenvolvido para empresas de transporte público, composto por três partes principais: um **site público**, um **site administrativo** e uma **catraca eletrônica com RFID** para validar a entrada dos passageiros. O sistema foi criado no 2º semestre do curso de [Informática para Web](https://www.ifspcaraguatatuba.edu.br/cursos/tecnico/tecnico-em-informatica-para-internet), como parte do **Projeto Integrado**. Ele permite que as empresas de ônibus gerenciem as viagens, os passageiros e as operações de forma mais eficiente e automatizada.
### Funcionalidades

#### **Gestão de Contas de Usuários**
- **Cadastro de Usuários**: O administrador pode criar, editar e excluir contas de **motoristas**, **atendentes** e **clientes**. Cada tipo de conta possui permissões específicas definidas no momento da criação.
- **Permissões Específicas por Tipo de Conta**:
  - **Administrador**: Tem acesso total a todas as funcionalidades do sistema, podendo gerenciar ônibus, trajetos, pontos, usuários e visualizar relatórios completos.
  - **Motorista**: Tem permissão para iniciar e finalizar viagens, com acesso restrito ao controle das viagens que realiza.
  - **Atendente**: Pode criar, editar e recarregar cartões de clientes, além de gerenciar contas de clientes (sem acesso a funções administrativas ou operacionais avançadas).
  - **Cliente**: Pode consultar e recarregar seus próprios cartões, visualizar histórico de viagens e consultar linhas de ônibus e horários.

#### **Gestão de Frota e Linhas de Ônibus**
- **Cadastro e Edição de Ônibus**: O administrador pode cadastrar, editar ou excluir registros de ônibus, vinculando-os a trajetórias de linhas de transporte.
- **Criação e Edição de Linhas de Ônibus**: O administrador pode criar novas linhas de ônibus, definir suas trajetórias e horários de operação. Essas informações são exibidas no site público para consulta dos passageiros.
- **Gerenciamento de Pontos de Ônibus**: O administrador pode cadastrar e editar os pontos de ônibus, com a possibilidade de associá-los a trajetos específicos. As localizações dos pontos são exibidas no mapa público usando a API do Google Maps.

#### **Catraca Eletrônica e Controle de Viagens**
- **Validação de Entrada com RFID**: A catraca eletrônica realiza a validação de passageiros utilizando tecnologia RFID, garantindo o controle de embarque. Ela só permite a passagem de passageiros durante a viagem, quando o ônibus está em operação.
- **Início e Término das Viagens**: O motorista pode iniciar uma viagem quando o ônibus começa seu trajeto, e finalizar ao chegar ao destino final. Após o término da viagem, o motorista pode criar uma nova viagem para a volta.
- **Monitoramento de Viagens**: O sistema permite monitorar as viagens realizadas, incluindo os passageiros embarcados, motoristas e status das viagens.

#### **Gerenciamento de Cartões e Recarga**
- **Criação e Gerenciamento de Cartões**: O atendente pode criar cartões para novos clientes e recarregar cartões existentes, garantindo que os passageiros tenham saldo suficiente para utilizar o transporte.
- **Recarregamento de Cartões**: Os atendentes podem recarregar os cartões de passageiros, incluindo a possibilidade de recarregar o saldo para terceiros, garantindo a facilidade de uso para os clientes.

#### **Consulta e Acompanhamento de Viagens para Clientes**
- **Consulta de Histórico de Viagens**: Os clientes podem acessar seu histórico de viagens, permitindo que acompanhem as viagens realizadas e o saldo utilizado.
- **Recarregamento de Cartão pelo Cliente**: Os clientes podem recarregar seus próprios cartões diretamente pelo site público, com a possibilidade de transferir saldo para outros cartões.
- **Visualização de Linhas e Horários**: O site público exibe as linhas de ônibus disponíveis, incluindo horários de partida e chegada, pontos de parada e trajetos percorridos, com informações atualizadas pelo administrador.
- **Visualização de Pontos de Ônibus no Mapa**: Utilizando a API do Google Maps, o site público exibe os pontos de ônibus no mapa, permitindo que os passageiros localizem facilmente os pontos de embarque.

#### **Dashboard Administrativo**
- **Relatórios de Viagens**: O administrador pode acessar relatórios detalhados sobre as viagens realizadas, incluindo informações sobre passageiros, motoristas e dados operacionais.
- **Visão Geral das Operações**: O dashboard oferece uma visão geral das operações, incluindo o total de motoristas, atendentes, clientes, viagens realizadas no ano e clientes ativos (aqueles que participaram de viagens recentemente).

#### **Integrações e Tecnologias Utilizadas**
- **Integração RFID**: A catraca eletrônica utiliza tecnologia RFID para validar a entrada dos passageiros no sistema, garantindo a segurança e o controle de embarque.
- **API do Google Maps**: A API do Google Maps é utilizada para exibir os pontos de ônibus no site público, permitindo uma visualização interativa e precisa dos trajetos e paradas.

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
