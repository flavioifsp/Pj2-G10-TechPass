USE techpassdb;

-- tabela da loja

CREATE TABLE IF NOT EXISTS `techpassdb`.`loja_recarga` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT 'Tech Pass',
  `cep` VARCHAR(9) NULL DEFAULT NULL,
  `endereco` VARCHAR(255) NULL,
  `lat` DECIMAL(9,6) NULL,
  `lng` DECIMAL(9,6) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- para deletar os dados dessa tabela

delete from `loja_recarga`;

-- Inserindo dados falsos na tabela loja_recarga
-- o endereco deve ser sempre nessa ordem(rua, numero, bairro, etc)

INSERT INTO `techpassdb`.`loja_recarga` (`nome`, `cep`, `endereco`, `lat`, `lng`)
VALUES
('Tech Pass Caraguatatuba', '11660-000', 'Rua da Praia, 100, Centro', -23.620994, -45.413150),
('Tech Store', '11660-010', 'Rua dos Coqueiros, 200, Jardim Primavera', -23.625935, -45.412047),
('Tech Solution', '11660-020', 'Avenida do Contorno, 300, Sumaré', -23.623501, -45.407782),
('Tech Avenue', '11660-030', 'Rua das Palmeiras, 400, Jardim Califórnia', -23.620174, -45.409367),
('Tech Center', '11660-040', 'Avenida da Liberdade, 500, Porto Novo', -23.620807, -45.408146),
('Tech World', '11660-050', 'Rua das Flores, 600, Massaguaçu', -23.618903, -45.418523),
('Tech Point', '11660-060', 'Avenida dos Girassóis, 700, Jardim Gaivotas', -23.609940, -45.411440),
('Tech Plaza', '11660-070', 'Rua dos Jasmins, 800, Indaiá', -23.605870, -45.407805),
('Tech Corner', '11660-080', 'Avenida das Acácias, 900, Poiares', -23.600567, -45.394253),
('Tech Services', '11660-090', 'Rua das Margaridas, 1000, Perequê Mirim', -23.604098, -45.384745),
('Tech Lane', '11660-100', 'Avenida das Camélias, 1100, Tabatinga', -23.608481, -45.380450),
('Tech Mart', '11660-110', 'Rua dos Lírios, 1200, Mococa', -23.615379, -45.377976);