-- CreateTable
CREATE TABLE `atendente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `local_de_trabalho_id` INTEGER NOT NULL,
    `superUser_id` INTEGER UNSIGNED NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `turno` VARCHAR(45) NULL,
    `nascimento` DATE NULL,
    `telefone` VARCHAR(13) NULL,
    `endereco` VARCHAR(255) NULL,

    UNIQUE INDEX `cpf_UNIQUE`(`cpf`),
    INDEX `fk_atendente_loja_recarga1_idx`(`local_de_trabalho_id`),
    INDEX `fk_atendente_superUser1_idx`(`superUser_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(14) NOT NULL,
    `nome` VARCHAR(120) NULL,
    `nascimento` DATE NULL,
    `saldo` DECIMAL(5, 3) NULL,

    UNIQUE INDEX `cpf_UNIQUE`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loja_recarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL DEFAULT 'Tech Pass',
    `cep` VARCHAR(9) NULL,
    `endereco` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(14) NULL,
    `foto` VARCHAR(200) NULL,
    `nascimento` DATE NULL,
    `cnh` VARCHAR(11) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `onibus` (
    `id` INTEGER NOT NULL,
    `placa` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `clientes_id` INTEGER NOT NULL,
    `username` VARCHAR(90) NULL,
    `email` VARCHAR(64) NOT NULL,
    `senha` VARCHAR(200) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`clientes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inicio` DATETIME(0) NULL,
    `duracao` TIME(0) NULL,
    `linhas_id` INTEGER UNSIGNED NOT NULL,
    `onibus_id` INTEGER NOT NULL,
    `motorista_id` INTEGER NOT NULL,

    INDEX `fk_viagem_linhas1_idx`(`linhas_id`),
    INDEX `fk_viagem_motorista1_idx`(`motorista_id`),
    INDEX `fk_viagem_onibus1_idx`(`onibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `superUser_id` INTEGER UNSIGNED NOT NULL,
    `cpf` VARCHAR(14) NULL,
    `nascimento` DATE NULL,
    `telefone` VARCHAR(13) NULL,

    INDEX `fk_ADM_superUser1_idx`(`superUser_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cartao` (
    `id` INTEGER NOT NULL,
    `modalidade` VARCHAR(45) NOT NULL,
    `desconto` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clliente_tem_cartao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientes_id` INTEGER NOT NULL,
    `cartao_id` INTEGER NOT NULL,
    `limiteDiario` INTEGER NULL,

    INDEX `fk_clientes_has_cartao_passe_clientes`(`clientes_id`),
    INDEX `fk_clliente_tem_cartao_cartao1_idx`(`cartao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `embarque` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `viagem_id` INTEGER NOT NULL,
    `clliente_tem_cartao_id` INTEGER NOT NULL,
    `tarifa` DECIMAL(3, 2) NULL,
    `data` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_embarque_clliente_tem_cartao1_idx`(`clliente_tem_cartao_id`),
    INDEX `fk_viagem_has_cliente_has_cartao_passe_viagem1`(`viagem_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linhas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `numero_linha` INTEGER NOT NULL,
    `bairroOrigem` VARCHAR(45) NOT NULL,
    `bairroDestino` VARCHAR(45) NOT NULL,
    `inicio` TIME(0) NULL,
    `fim` TIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontoonibus` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `endereco` VARCHAR(255) NULL,
    `cep` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rotas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `percurso` INTEGER NULL,
    `pontoOnibus_id` INTEGER UNSIGNED NOT NULL,
    `linha_id` INTEGER UNSIGNED NOT NULL,

    INDEX `fk_trajeto_paradas_linha1_idx`(`linha_id`),
    INDEX `fk_trajeto_paradas_ponto_de_onibus1`(`pontoOnibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `superuser` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(64) NOT NULL,
    `senha` VARCHAR(100) NULL,
    `username` VARCHAR(45) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atendente` ADD CONSTRAINT `fk_atendente_loja_recarga1` FOREIGN KEY (`local_de_trabalho_id`) REFERENCES `loja_recarga`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `atendente` ADD CONSTRAINT `fk_atendente_superUser1` FOREIGN KEY (`superUser_id`) REFERENCES `superuser`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `fk_usuario_clientes1` FOREIGN KEY (`clientes_id`) REFERENCES `clientes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_linhas1` FOREIGN KEY (`linhas_id`) REFERENCES `linhas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_motorista1` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_onibus` FOREIGN KEY (`onibus_id`) REFERENCES `onibus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `adm` ADD CONSTRAINT `fk_ADM_superUser1` FOREIGN KEY (`superUser_id`) REFERENCES `superuser`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `clliente_tem_cartao` ADD CONSTRAINT `fk_clientes_has_cartao_passe_clientes` FOREIGN KEY (`clientes_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `clliente_tem_cartao` ADD CONSTRAINT `fk_clliente_tem_cartao_cartao1` FOREIGN KEY (`cartao_id`) REFERENCES `cartao`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `embarque` ADD CONSTRAINT `fk_embarque_clliente_tem_cartao1` FOREIGN KEY (`clliente_tem_cartao_id`) REFERENCES `clliente_tem_cartao`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `embarque` ADD CONSTRAINT `fk_viagem_has_cliente_has_cartao_passe_viagem1` FOREIGN KEY (`viagem_id`) REFERENCES `viagem`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `rotas` ADD CONSTRAINT `fk_trajeto_paradas_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linhas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rotas` ADD CONSTRAINT `fk_trajeto_paradas_ponto_de_onibus1` FOREIGN KEY (`pontoOnibus_id`) REFERENCES `pontoonibus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

