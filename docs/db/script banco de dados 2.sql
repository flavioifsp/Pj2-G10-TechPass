create database TechPass;

use TechPass;

CREATE TABLE onibus(
  id INT PRIMARY KEY,
  placa VARCHAR(8) NOT NULL
);

CREATE TABLE motorista(
  id INT PRIMARY KEY AUTO_INCREMENT,
  CPF VARCHAR(45) ,
  foto VARCHAR(200) ,
  nascimento DATE ,
  salario INT ,
  telefone INT 
);

CREATE TABLE usuario(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) ,
  email VARCHAR(150),
  senha VARCHAR(45) ,
  telefone INT ,
  token VARCHAR(45) 
);

CREATE TABLE linha(
  id INT PRIMARY KEY AUTO_INCREMENT,
  numero_linha INT ,
  bairroIda VARCHAR(45) ,
  BairroVolta VARCHAR(45) 
);
  
CREATE TABLE HorarioSaidaBairro(
  id INT PRIMARY KEY AUTO_INCREMENT,
  saida DATETIME NULL,
  bairroSaida VARCHAR(45) NULL,
  linha_id INT NOT NULL,
  CONSTRAINT fk_HorarioSaidaBairro_linha1 FOREIGN KEY (linha_id) REFERENCES linha(id)
);

CREATE TABLE viagem(
  id INT PRIMARY KEY AUTO_INCREMENT,
  inicio DATETIME ,
  duracao time  ,
  onibus_id INT ,
  motorista_registro INT ,
  linha_id INT ,
  CONSTRAINT fk_viagem_onibus FOREIGN KEY (onibus_id) REFERENCES onibus(id),
  CONSTRAINT fk_viagem_motorista1 FOREIGN KEY (motorista_registro) REFERENCES motorista(registro),
  CONSTRAINT fk_viagem_linha1 FOREIGN KEY (linha_id) REFERENCES linha (`id`)
);
 
CREATE TABLE Loja_Recarga(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45)  DEFAULT 'Tech Pass',
  cep VARCHAR(8) ,
  coordenadas VARCHAR(45) 
);
  
CREATE TABLE cartao_passe(
  id INT PRIMARY KEY,
  modalidade VARCHAR(45) ,
  desconto INT 
);
  
CREATE TABLE atendente(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(11) ,
  salario INT ,
  senha VARCHAR(45) ,
  token VARCHAR(45) 
);
  
CREATE TABLE gerente(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(45) ,
  salario INT ,
  senha VARCHAR(45) ,
  token VARCHAR(45) 
);
  
  
CREATE TABLE clientes(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(45) ,
  nome VARCHAR(45) ,
  nascimento DATE ,
  saldo DECIMAL(5,3)  ,
  cadastrado_cliente INT ,
  CONSTRAINT fk_clientes_usuario1 FOREIGN KEY (cadastrado_cliente) REFERENCES usuario(cliente_id)
);
  
CREATE TABLE clientes_has_cartao_passe(
  id int primary key auto_increment,
  clientes_id INT ,
  cartao_passe_id INT  ,
  CONSTRAINT fk_clientes_has_cartao_passe_clientes FOREIGN KEY (clientes_id) REFERENCES clientes(id),
  CONSTRAINT fk_clientes_has_cartao_passe_cartao_passe FOREIGN KEY (cartao_passe_id) REFERENCES cartao_passe(id)
);
  
CREATE TABLE viagem_has_cliente_cartão(
  viagem_idviagem INT  PRIMARY KEY,
  clientes_has_cartao_passe_id INT ,
  tarifa DECIMAL(3,2) ,
  data DATETIME ,
  
  CONSTRAINT fk_viagem_has_cliente_has_cartao_passe_viagem1 FOREIGN KEY (viagem_idviagem) REFERENCES viagem(idviagem),
  CONSTRAINT fk_viagem_has_cliente_cartão_clientes_has_cartao_passe1 FOREIGN KEY (clientes_has_cartao_passe_id) REFERENCES clientes_has_cartao_passe(id)
);
  
CREATE TABLE ponto_de_onibus(
  id INT PRIMARY KEY,
  endereco VARCHAR(45) 
);
  
  
CREATE TABLE trajeto_paradas(
  id int primary key auto_increment, 
  linha_id INT ,
  ponto_de_onibus_id INT ,
  bairroSaida VARCHAR(25) ,
  caminho INT ,
  CONSTRAINT fk_linha_has_ponto_de_onibus_linha FOREIGN KEY (linha_id) REFERENCES linha(id),
  CONSTRAINT fk_linha_has_ponto_de_onibus_ponto_de_onibus FOREIGN KEY (ponto_de_onibus_id) REFERENCES ponto_de_onibus(id)
);
  
  
  
  