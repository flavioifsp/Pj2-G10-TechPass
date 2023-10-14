-- CreateTable
CREATE TABLE `atendente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NULL,
    `salario` INTEGER NULL,
    `senha` VARCHAR(45) NULL,
    `token` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cartao_passe` (
    `id` INTEGER NOT NULL,
    `modalidade` VARCHAR(45) NULL,
    `desconto` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(45) NULL,
    `nome` VARCHAR(45) NULL,
    `nascimento` DATE NULL,
    `saldo` DECIMAL(5, 3) NULL,
    `cadastrado_cliente` INTEGER NULL,

    INDEX `fk_clientes_usuario1`(`cadastrado_cliente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes_has_cartao_passe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientes_id` INTEGER NULL,
    `cartao_passe_id` INTEGER NULL,

    INDEX `fk_clientes_has_cartao_passe_cartao_passe`(`cartao_passe_id`),
    INDEX `fk_clientes_has_cartao_passe_clientes`(`clientes_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gerente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(45) NULL,
    `salario` INTEGER NULL,
    `senha` VARCHAR(45) NULL,
    `token` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horariosaidabairro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saida` DATETIME(0) NULL,
    `bairroSaida` VARCHAR(45) NULL,
    `linha_id` INTEGER NULL,

    INDEX `fk_HorarioSaidaBairro_linha1`(`linha_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_linha` INTEGER NULL,
    `bairroIda` VARCHAR(45) NULL,
    `BairroVolta` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loja_recarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL DEFAULT 'Tech Pass',
    `cep` VARCHAR(8) NULL,
    `coordenadas` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CPF` VARCHAR(45) NULL,
    `foto` VARCHAR(200) NULL,
    `nascimento` DATE NULL,
    `salario` INTEGER NULL,
    `telefone` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `onibus` (
    `id` INTEGER NOT NULL,
    `placa` VARCHAR(8) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ponto_de_onibus` (
    `id` INTEGER NOT NULL,
    `endereco` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trajeto_paradas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `linha_id` INTEGER NULL,
    `ponto_de_onibus_id` INTEGER NULL,
    `bairroSaida` VARCHAR(25) NULL,
    `caminho` INTEGER NULL,

    INDEX `fk_linha_has_ponto_de_onibus_linha`(`linha_id`),
    INDEX `fk_linha_has_ponto_de_onibus_ponto_de_onibus`(`ponto_de_onibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL,
    `email` VARCHAR(150) NULL,
    `senha` VARCHAR(45) NULL,
    `telefone` INTEGER NULL,
    `token` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inicio` DATETIME(0) NULL,
    `duracao` TIME(0) NULL,
    `onibus_id` INTEGER NULL,
    `motorista_id` INTEGER NULL,
    `linha_id` INTEGER NULL,

    INDEX `fk_viagem_linha1`(`linha_id`),
    INDEX `fk_viagem_motorista1`(`motorista_id`),
    INDEX `fk_viagem_onibus`(`onibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem_has_cliente_cartão` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `viagem_id` INTEGER NULL,
    `clientes_has_cartao_passe_id` INTEGER NULL,
    `tarifa` DECIMAL(3, 2) NULL,
    `data` DATETIME(0) NULL,

    INDEX `fk_viagem_has_cliente_cartão_clientes_has_cartao_passe1`(`clientes_has_cartao_passe_id`),
    INDEX `fk_viagem_has_cliente_has_cartao_passe_viagem1`(`viagem_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientes` ADD CONSTRAINT `fk_clientes_usuario1` FOREIGN KEY (`cadastrado_cliente`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `clientes_has_cartao_passe` ADD CONSTRAINT `fk_clientes_has_cartao_passe_cartao_passe` FOREIGN KEY (`cartao_passe_id`) REFERENCES `cartao_passe`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `clientes_has_cartao_passe` ADD CONSTRAINT `fk_clientes_has_cartao_passe_clientes` FOREIGN KEY (`clientes_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `horariosaidabairro` ADD CONSTRAINT `fk_HorarioSaidaBairro_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linha`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `trajeto_paradas` ADD CONSTRAINT `fk_linha_has_ponto_de_onibus_linha` FOREIGN KEY (`linha_id`) REFERENCES `linha`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `trajeto_paradas` ADD CONSTRAINT `fk_linha_has_ponto_de_onibus_ponto_de_onibus` FOREIGN KEY (`ponto_de_onibus_id`) REFERENCES `ponto_de_onibus`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linha`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_motorista1` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_onibus` FOREIGN KEY (`onibus_id`) REFERENCES `onibus`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `viagem_has_cliente_cartão` ADD CONSTRAINT `fk_viagem_has_cliente_cartão_clientes_has_cartao_passe1` FOREIGN KEY (`clientes_has_cartao_passe_id`) REFERENCES `clientes_has_cartao_passe`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `viagem_has_cliente_cartão` ADD CONSTRAINT `fk_viagem_has_cliente_has_cartao_passe_viagem1` FOREIGN KEY (`viagem_id`) REFERENCES `viagem`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

