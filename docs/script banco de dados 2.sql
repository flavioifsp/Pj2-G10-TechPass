create database TechPass;

use TechPass;

CREATE TABLE onibus(
  id INT PRIMARY KEY,
  placa VARCHAR(8) NOT NULL
);

CREATE TABLE motorista(
  registro INT PRIMARY KEY AUTO_INCREMENT,
  CPF VARCHAR(45) NOT NULL,
  foto VARCHAR(200) NOT NULL,
  nascimento DATE NOT NULL,
  salario INT NOT NULL,
  telefone INT NULL
);

CREATE TABLE usuario(
  cliente_id INT NOT NULL PRIMARY KEY,
  nome VARCHAR(45) not null,
  email VARCHAR(150) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  telefone INT NULL,
  token VARCHAR(45) NULL
);

CREATE TABLE linha(
  id INT PRIMARY KEY AUTO_INCREMENT,
  numero_linha INT NULL,
  bairroIda VARCHAR(45) NULL,
  BairroVolta VARCHAR(45) NULL
);
  
CREATE TABLE HorarioSaidaBairro(
  id INT PRIMARY KEY AUTO_INCREMENT,
  saida DATETIME NULL,
  bairroSaida VARCHAR(45) NULL,
  linha_id INT NOT NULL,
  CONSTRAINT fk_HorarioSaidaBairro_linha1 FOREIGN KEY (linha_id) REFERENCES linha(id)
);

CREATE TABLE viagem(
  idviagem INT PRIMARY KEY AUTO_INCREMENT,
  inicio DATETIME NOT NULL,
  fim DATETIME NOT NULL,
  onibus_id INT NOT NULL,
  motorista_registro INT NOT NULL,
  linha_id INT NOT NULL,
  CONSTRAINT fk_viagem_onibus FOREIGN KEY (onibus_id) REFERENCES onibus(id),
  CONSTRAINT fk_viagem_motorista1 FOREIGN KEY (motorista_registro) REFERENCES motorista(registro),
  CONSTRAINT fk_viagem_linha1 FOREIGN KEY (linha_id) REFERENCES linha (`id`)
);
 
CREATE TABLE Loja_Recarga(
  idLoja INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL DEFAULT 'Tech Pass',
  cep VARCHAR(8) NOT NULL,
  coordenadas VARCHAR(45) NOT NULL
);
  
CREATE TABLE cartao_passe(
  id INT PRIMARY KEY,
  modalidade VARCHAR(45) NOT NULL,
  desconto INT NOT NULL
);
  
CREATE TABLE atendente(
  registro INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(11) NOT NULL,
  salario INT NULL,
  senha VARCHAR(45) NULL,
  token VARCHAR(45) NULL
);
  
CREATE TABLE gerente(
  registro INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(45) NOT NULL,
  salario INT NULL,
  senha VARCHAR(45) NULL,
  token VARCHAR(45) NULL
);
  
  
CREATE TABLE clientes(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(45) NOT NULL unique,
  nome VARCHAR(45) not NULL,
  nascimento DATE not NULL,
  saldo DECIMAL(5,3)  not NULL,
  cadastrado_cliente INT NOT NULL,
  CONSTRAINT fk_clientes_usuario1 FOREIGN KEY (cadastrado_cliente) REFERENCES usuario(cliente_id)
);
  
CREATE TABLE clientes_has_cartao_passe(
  id int primary key auto_increment,
  clientes_id INT not null,
  cartao_passe_id INT not null ,
  CONSTRAINT fk_clientes_has_cartao_passe_clientes FOREIGN KEY (clientes_id) REFERENCES clientes(id),
  CONSTRAINT fk_clientes_has_cartao_passe_cartao_passe FOREIGN KEY (cartao_passe_id) REFERENCES cartao_passe(id)
);
  
CREATE TABLE viagem_has_cliente_cartão(
  viagem_idviagem INT  PRIMARY KEY,
  clientes_has_cartao_passe_id INT NOT NULL,
  tarifa DECIMAL(3,2) NOT NULL,
  data DATETIME NOT NULL,
  
  CONSTRAINT fk_viagem_has_cliente_has_cartao_passe_viagem1 FOREIGN KEY (viagem_idviagem) REFERENCES viagem(idviagem),
  CONSTRAINT fk_viagem_has_cliente_cartão_clientes_has_cartao_passe1 FOREIGN KEY (clientes_has_cartao_passe_id) REFERENCES clientes_has_cartao_passe(id)
);
  
CREATE TABLE ponto_de_onibus(
  id INT PRIMARY KEY,
  endereco VARCHAR(45) not NULL
);
  
  
CREATE TABLE trajeto_paradas(
  id int primary key auto_increment, 
  linha_id INT not null,
  ponto_de_onibus_id INT not null,
  bairroSaida VARCHAR(25) NOT NULL,
  caminho INT NOT NULL,
  CONSTRAINT fk_linha_has_ponto_de_onibus_linha FOREIGN KEY (linha_id) REFERENCES linha(id),
  CONSTRAINT fk_linha_has_ponto_de_onibus_ponto_de_onibus FOREIGN KEY (ponto_de_onibus_id) REFERENCES ponto_de_onibus(id)
);
  
  
  
  