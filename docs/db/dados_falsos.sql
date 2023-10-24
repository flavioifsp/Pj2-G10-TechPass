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



-- Inserir Pontos de Ônibus
INSERT INTO `techpassdb`.`ponto_de_onibus` (`endereco`, `cep`, `lat`, `lng`) VALUES 
('Rua do Comércio, 100, Centro', '11660000', -45.413284, -23.617582),
('Avenida da Praia, 200, Centro', '11660000', -45.413727, -23.616609),
('Rua das Flores, 300, Jardim Primavera', '11661234', -45.408855, -23.621260),
('Avenida das Palmeiras, 400, Jardim Califórnia', '11662345', -45.409883, -23.622192),
('Rua dos Girassóis, 500, Jardim das Acácias', '11663456', -45.405977, -23.622978),
('Avenida dos Ipês, 600, Jardim Paraíso', '11664567', -45.407622, -23.624152),
('Rua das Violetas, 700, Jardim da Praia', '11665678', -45.404079, -23.624445),
('Avenida dos Lírios, 800, Jardim do Sol', '11666789', -45.405861, -23.625588),
('Rua das Orquídeas, 900, Jardim das Orquídeas', '11667890', -45.401732, -23.627213),
('Avenida das Rosas, 1000, Jardim das Rosas', '11668901', -45.403776, -23.628355);

-- Inserir Linhas de Ônibus
INSERT INTO `techpassdb`.`linhas` (`numero_linha`, `bairroOrigem`, `bairroDestino`) VALUES 
(1, 'Centro', 'Jardim Primavera'),
(1, 'Jardim Primavera', 'Centro'),
(2, 'Jardim Califórnia', 'Jardim das Acácias'),
(2, 'Jardim das Acácias', 'Jardim Califórnia'),
(3, 'Jardim Paraíso', 'Jardim da Praia'),
(3, 'Jardim da Praia', 'Jardim Paraíso'),
(4, 'Jardim do Sol', 'Jardim das Orquídeas'),
(4, 'Jardim das Orquídeas', 'Jardim do Sol'),
(5, 'Jardim das Rosas', 'Centro'),
(5, 'Centro', 'Jardim das Rosas');

-- Inserir Horários de Saída
INSERT INTO `techpassdb`.`horario_diario_saida` (`linhas_id`, `inicio`, `fim`) VALUES 
(1, '06:00', '07:00'),
(1, '07:00', '08:00'),
(2, '06:30', '07:30'),
(2, '07:30', '08:30'),
(3, '07:00', '08:00'),
(3, '08:00', '09:00'),
(4, '07:30', '08:30'),
(4, '08:30', '09:30'),
(5, '08:00', '09:00'),
(5, '09:00', '10:00');

-- Inserir Rotas
INSERT INTO `techpassdb`.`rotas` (`percurso`, `linha_id`, `pontoOnibus_id`) VALUES 
(1, 1, 1),
(2, 1, 3),
(3, 2, 5),
(4, 2, 7),
(5, 3, 9),
(6, 3, 10),
(7, 4, 2),
(8, 4, 4),
(9, 5, 6),
(10, 5, 8);
