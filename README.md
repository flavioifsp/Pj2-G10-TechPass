<p align="center">
  <img width="250" src="https://github.com/user-attachments/assets/f6a7883d-c4b7-49ac-8fb7-48238a9c42ae" alt="TechPass Logo"/>
</p>
<p align="center">
 
   <a href="https://jwt.io/" target="_blank">
    <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens" alt="JWT"/>
  </a>
    <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma"/>
  </a>
</p>
<p align="center">
  <a href="https://axios-http.com/" target="_blank">
    <img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios" alt="Axios"/>
  </a>
  <a href="https://getbootstrap.com/" target="_blank">
    <img src="https://img.shields.io/badge/Bootstrap-CSS%20Framework-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap"/>
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/bcryptjs" target="_blank">
    <img src="https://img.shields.io/badge/Bcrypt.js-Security-00C7B7?style=for-the-badge&logo=lock" alt="Bcrypt.js"/>
  </a>
  <a href="https://www.npmjs.com/package/multer" target="_blank">
    <img src="https://img.shields.io/badge/Multer-File%20Upload-FF6F00?style=for-the-badge&logo=upload" alt="Multer"/>
  </a>

   <a href="https://www.mysql.com/" target="_blank">
    <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql" alt="MySQL"/>
  </a>
</p>
<p align="center">
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Express-Web%20Framework-000000?style=for-the-badge&logo=express" alt="Express"/>
  </a>
 <a href="https://ejs.co/" target="_blank">
    <img src="https://img.shields.io/badge/EJS-Template%20Engine-8BC500?style=for-the-badge&logo=ejs" alt="EJS"/>
  </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-Linguagem-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  </a>
</p>

# TECHPASS - Sistema de Gerenciamento para Empresa de Ônibus

O **TechPass** é um sistema completo para **gestão de transporte público**, desenvolvido entre **agosto a novembro de 2023** como parte do **Projeto Integrado** do curso de [Informática para Web](https://www.ifspcaraguatatuba.edu.br/cursos/tecnico/tecnico-em-informatica-para-internet). Ele foi projetado para **automatizar e otimizar** as operações de transporte, proporcionando maior eficiência para passageiros, administradores, motoristas e atendentes.

> ⚠️ **Nota**: Este projeto foi desenvolvido enquanto aprendíamos o básico de desenvolvimento e algumas boas práticas não foram seguidas. Projetos posteriores apresentam uma qualidade superior.

## 📋 **Visão Geral**

O sistema é composto por três módulos principais:

1. **Site Público**: A área pública do sistema, onde são disponibilizadas informações importantes sobre a empresa, como itinerários das linhas e a localização das lojas no mapa. Os clientes também podem acessar sua conta para visualizar o histórico de viagens e recarregar o saldo do cartão.
2. **Painel Administrativo**: Acesso restrito para administradores, atendentes e motoristas, com permissões específicas para cada tipo de conta. Esse módulo permite a gestão de dados, controle de operações e monitoramento em tempo real das atividades do sistema..
3. **Catraca Eletrônica**: Sistema automatizado de controle de embarques, utilizando **cartões RFID** para validar e liberar o acesso dos passageiros nos veículos.

## ✨ **Funcionalidades**

###  **Site Público**

#### **Área Aberta com Informações Gerais**

![Página inicial com mapa e consulta de linhas](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/3a7c648388158920a634c713117d46793551dd40/site-publico_index-linhas.gif)

- **Consulta de Linhas e Horários**: Informações detalhadas sobre trajetos, horários e pontos de parada, configuradas pelo administrador.
- **Localização de Lojas**: Mapa interativo integrado à **API do Google Maps**, exibindo as lojas configuradas pelo administrador.
- **Perguntas Frequentes**: Seção dedicada às respostas para as dúvidas mais comuns dos usuários.
- **Apresentação da Empresa**: Informações básicas e detalhes sobre os serviços oferecidos.
  
#### **Área da Conta do Usuário**

![Área de login com histórico e recarga de cartões](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/4da0f67a81abda8a71f0f4babfc313df3726d3c5/recargaEhistorico_publico.gif)

- **Histórico de Viagens**: Relatórios completos das viagens realizadas pelo usuário.
- **Consulta de Saldo**: Exibição em tempo real do saldo disponível no cartão.
- **Recarga de Cartões**: Funcionalidade que permite adicionar saldo diretamente pelo site de maneira prática e segura.
- **Edição de Informações da Conta**: Possibilidade de atualizar dados pessoais diretamente na plataforma.



###  **Painel Administrativo e Catraca**

#### **Visão Geral**

O Painel Administrativo oferece ferramentas segmentadas por **perfis de acesso**, com **administradores, atendentes e motoristas** tendo diferentes permissões. A **catraca eletrônica** utiliza tecnologia **RFID** para controle automatizado de embarques, garantindo eficiência e segurança.

#### **Perfil Administrador**

Acesso completo às funcionalidades do sistema.  
![Gestão administrativa com criação de usuários e relatórios](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/0b520da5ab1eacf23428787d51772da6ea0f2f2f/adm_adm.gif)

- **Gestão de Usuários**: Criação, edição e exclusão de contas de clientes, atendentes e motoristas.
- **Cadastro de Cartões**: Configuração de taxas e tipos de cartões.
- **Gestão de Linhas**: Cadastro, edição e exclusão de linhas de ônibus.
- **Gestão de Ônibus**: Cadastro, edição e exclusão de veículos da frota.
- **Histórico de Viagens**: Visualização detalhada de informações sobre horários, duração e passageiros embarcados.
- **Gestão de Lojas**: Cadastro, edição e exclusão de lojas físicas.
- **Dashboard Operacional**: Monitoramento em tempo real das viagens, da frota e das atividades, disponível para todos os funcionários.

#### **Perfil Atendente**

Ferramentas otimizadas para suporte aos passageiros.  
![Ações do atendente: recarga e emissão de cartões](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/4ea5b93036b01b3a68c77c13e6fc62a3389354b6/adm_atendente.gif)

- **Gestão de Contas**: Criação e edição de contas de passageiros.
- **Recarga de Cartões**: Adição rápida e prática de saldo.
- **Emissão de Cartões**: Criação de novos cartões personalizados para passageiros.

#### **Área do Motorista e Catraca Eletrônica**

Operações integradas para facilitar o controle de embarques.  
![Ações do motorista: iniciar viagem e validar embarques](https://gist.githubusercontent.com/6aleatorio6/0cef2af7cab5eff1fd4bc2c6ca6ed174/raw/f1d04d06aa45993716e3fafea68511fcc80f9d0b/adm_motorista-catraca.gif)

- **Área do Motorista**:
  - **Início e Término de Viagens**: Controle direto sobre o início e fim das viagens associadas aos ônibus e linhas disponíveis.

- **Catraca Eletrônica**:
  - **Monitoramento em Tempo Real**: Associação automática dos embarques ao motorista e à viagem ativa.
  - **Validação de Cartões**: Controle automatizado por **RFID**, com feedback direto para os passageiros:
    - **Saldo Insuficiente**: Mensagem clara informando a necessidade de recarga.
    - **Erro de Leitura**: Alerta para cartões não encontrados.
    - **Embarque Bem-sucedido**: Exibição do saldo consumido e do tipo de cartão utilizado.


## Tecnologias e Bibliotecas Utilizadas :books:

- [Axios](https://axios-http.com/) - Biblioteca para fazer requisições HTTP
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para design responsivo e componentes de interface
- [EJS](https://ejs.co/) - Motor de template para renderização de páginas no servidor
- [Express](https://expressjs.com/) - Framework para construção de servidores web em Node.js
- [Prisma](https://www.prisma.io/) - ORM para manipulação de banco de dados
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Biblioteca para hash de senhas de forma segura
- [JSON Web Token (JWT)](https://jwt.io/) - Biblioteca para criação e validação de tokens JWT
- [Multer](https://www.npmjs.com/package/multer) - Middleware para upload de arquivos em Node.js

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

4. **Teste o sistema** 👍

### Áreas do Sistema

- **Acesso Público**: [http://localhost:3000/](http://localhost:3000/)
- **Painel Administrativo**: [http://localhost:3000/adm](http://localhost:3000/adm)
- **Catraca**: [http://localhost:3000/catraca?onibus=ID_DO_ONIBUS](http://localhost:3000/catraca?onibus=ID_DO_ONIBUS)  
  (Substitua **ID_DO_ONIBUS** pelo ID de um ônibus válido)

### Contas de Teste

| **Onde Usar**    | **Tipo de Usuário** | **Email**            | **Senha** |
| ---------------- | ------------------- | -------------------- | --------- |
| **Site Público** | Cliente             | cliente@example.com  | 12345678  |
| **Painel Admin** | Administrador (Adm) | gerente@techpass.com | senha123  |
| **Painel Admin** | Atendente           | atendente@gmail.com  | 12345678  |
| **Painel Admin** | Motorista           | motorista@gmail.com  | 12345678  |

## Desenvolvedores :octocat:

| [<img src="https://avatars.githubusercontent.com/u/132392161?v=4" width=115><br><sub>Leonardo L. Felix</sub>](https://github.com/6aleatorio6) | [<img src="https://avatars.githubusercontent.com/u/141774746?v=4" width=115><br><sub>Flavio Menezes Leite</sub>](https://github.com/flavioifsp) |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
