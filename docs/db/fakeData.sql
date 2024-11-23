/*M!999999\- enable the sandbox mode */
-- MariaDB dump 10.19  Distrib 10.11.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: techpassdb
-- ------------------------------------------------------
-- Server version	10.11.10-MariaDB-ubu2204
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Current Database: `techpassdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `techpassdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;

USE `techpassdb`;

--
-- Table structure for table `adm`
--

DROP TABLE IF EXISTS `adm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `adm` (
    `superUser_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `cargo` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`superUser_id`),
    KEY `fk_ADM_superUser1_idx` (`superUser_id`),
    CONSTRAINT `fk_ADM_superUser1` FOREIGN KEY (`superUser_id`) REFERENCES `superuser` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `adm`
--

LOCK TABLES `adm` WRITE;
/*!40000 ALTER TABLE `adm` DISABLE KEYS */
;

INSERT INTO `adm` VALUES (7, 'Gerente');
/*!40000 ALTER TABLE `adm` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `atendente`
--

DROP TABLE IF EXISTS `atendente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `atendente` (
    `superUser_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `local_de_trabalho_id` int(11) DEFAULT NULL,
    `turno` varchar(45) DEFAULT NULL,
    `telefone` varchar(13) DEFAULT NULL,
    `endereco` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`superUser_id`),
    UNIQUE KEY `superUser_id_UNIQUE` (`superUser_id`),
    KEY `fk_atendente_loja_recarga1_idx` (`local_de_trabalho_id`),
    KEY `fk_atendente_superUser1_idx` (`superUser_id`),
    CONSTRAINT `fk_atendente_loja_recarga1` FOREIGN KEY (`local_de_trabalho_id`) REFERENCES `loja_recarga` (`id`) ON DELETE SET NULL,
    CONSTRAINT `fk_atendente_superUser1` FOREIGN KEY (`superUser_id`) REFERENCES `superuser` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `atendente`
--

LOCK TABLES `atendente` WRITE;
/*!40000 ALTER TABLE `atendente` DISABLE KEYS */
;

INSERT INTO
    `atendente`
VALUES (
        1,
        NULL,
        'manha',
        '11956774880',
        'Rua Ruy Barbosa 519'
    ),
    (
        2,
        NULL,
        'manha',
        '11956774880',
        'Rua Ruy Barbosa 519'
    );
/*!40000 ALTER TABLE `atendente` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `cartoes_do_cliente`
--

DROP TABLE IF EXISTS `cartoes_do_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `cartoes_do_cliente` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `codigo_do_cartao` int(11) DEFAULT NULL,
    `clientes_id` int(11) NOT NULL,
    `cartao_id` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `codigo_do_cartao_UNIQUE` (`codigo_do_cartao`),
    KEY `fk_clientes_has_cartao_passe_clientes` (`clientes_id`),
    KEY `fk_clliente_tem_cartao_cartao1_idx` (`cartao_id`),
    CONSTRAINT `fk_clientes_has_cartao_passe_clientes` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_clliente_tem_cartao_cartao1` FOREIGN KEY (`cartao_id`) REFERENCES `tipos_de_cartao` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `cartoes_do_cliente`
--

LOCK TABLES `cartoes_do_cliente` WRITE;
/*!40000 ALTER TABLE `cartoes_do_cliente` DISABLE KEYS */
;

INSERT INTO
    `cartoes_do_cliente`
VALUES (2, 3344440, 10, 3),
    (3, 9452789, 3, 2),
    (4, 1234, 8, 1);
/*!40000 ALTER TABLE `cartoes_do_cliente` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `clientes` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(64) NOT NULL,
    `cpf` varchar(14) NOT NULL,
    `username` varchar(90) DEFAULT NULL,
    `senha` varchar(200) DEFAULT NULL,
    `nome` varchar(120) DEFAULT NULL,
    `nascimento` date DEFAULT NULL,
    `saldo` decimal(6, 2) DEFAULT 0.00,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email_UNIQUE` (`email`),
    UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */
;

INSERT INTO
    `clientes`
VALUES (
        1,
        'robson@gmail.com',
        '123.456.789-98',
        'robinho',
        '$2a$10$.GzoF1PEk4xtqAthK0YRm./z5emf/J/odjg1aqJFOuvQ/5Z/0SdPm',
        'Robson',
        '2007-01-03',
        0.00
    ),
    (
        2,
        'talita@gmail.com',
        '123.456.785-85',
        'tata',
        '$2a$10$2yGvwZZ9Ma.uCg5QPPfPOeO6crh36ymDP17Yzav/JbGSjlGm726lO',
        'Talita',
        '2004-02-03',
        0.00
    ),
    (
        3,
        'flavio@gmail.com',
        '987.654.321-25',
        'flavio',
        '$2a$10$oiKhmMTlb5qLY7zHfapSq.sLOkh2usPG6yFRyTOI0PhKUYxEC.hky',
        'Flavio',
        '2003-01-12',
        0.00
    ),
    (
        4,
        'cliente@gmail.com',
        '159.951.236-68',
        'leonardo',
        '$2a$10$DPgfUGOgXYdGkd36.kiB5utMaAbPgyOXx826DuuTJ6TYUeFk7Or5K',
        'leonardo',
        '2007-05-12',
        0.00
    ),
    (
        5,
        'rodrigo@gmail.com',
        '123.456.789-57',
        'rodrigo',
        '$2a$10$lH3x37QCsa48Imd90Lp5gO95zAo59cN8pwl9dGnEHpQwcZuygS3sC',
        'rodirgo',
        '2010-06-12',
        0.00
    ),
    (
        6,
        'joao.silva@example.com',
        '12345678901',
        'joao123',
        '$2a$10$qhbVZNkEUiIoZhVA2fFvB.LYJOw0gvC1eTAE7C4YmqFMPypatjBe.',
        'João Silva',
        '1990-05-15',
        0.00
    ),
    (
        7,
        'pedro.rocha@example.com',
        '23456789012',
        'pedro789',
        '$2a$10$fPAkHPaULVZ80n3FldjFGeU8E1t33zZ4TVDsdr7KO7DBJyMfRcll6',
        'Pedro Rocha',
        '1992-11-28',
        0.00
    ),
    (
        8,
        'cliente@example.com',
        '567.890.123-45',
        'vitoria123',
        '$2a$10$Zm4E/x.I75/y.kUwHfEuAu3SJx4233LGAgx0oXTVJARKEaLwiDk5y',
        'vitoria ',
        '1995-04-03',
        22.00
    ),
    (
        9,
        'maria.oliveira@example.com',
        '98765432109',
        'maria456',
        '$2a$10$lYNw9MEdN6uu3hZQlzODFe9NUlIcDdu9UpD.z5fB56OnJP5OiQL5W',
        'Maria Oliveira',
        '1985-08-22',
        0.00
    ),
    (
        10,
        'carlos.santos@example.com',
        '34567890123',
        'carlos789',
        '$2a$10$yumgEBmKnIuiz3I97nDIzOu6tcEBzAAoTAeNM6cgVc9MD3pLk9x/e',
        'Carlos Santos',
        '1988-12-10',
        0.00
    );
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `embarque`
--

DROP TABLE IF EXISTS `embarque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `embarque` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `cartaoDoCliente_id` int(11) DEFAULT NULL,
    `viagem_id` int(11) NOT NULL,
    `historico_tarifa` decimal(6, 2) DEFAULT NULL,
    `data` datetime DEFAULT current_timestamp(),
    PRIMARY KEY (`id`),
    KEY `fk_viagem_has_cliente_has_cartao_passe_viagem1` (`viagem_id`),
    KEY `fk_embarque_cartoes_do_cliente1_idx` (`cartaoDoCliente_id`),
    CONSTRAINT `fk_embarque_cartoes_do_cliente1` FOREIGN KEY (`cartaoDoCliente_id`) REFERENCES `cartoes_do_cliente` (`id`) ON DELETE SET NULL,
    CONSTRAINT `fk_viagem_has_cliente_has_cartao_passe_viagem1` FOREIGN KEY (`viagem_id`) REFERENCES `viagem` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `embarque`
--

LOCK TABLES `embarque` WRITE;
/*!40000 ALTER TABLE `embarque` DISABLE KEYS */
;

INSERT INTO
    `embarque`
VALUES (
        1,
        4,
        1,
        5.00,
        '2024-11-19 16:03:07'
    ),
    (
        2,
        4,
        1,
        5.00,
        '2024-11-19 16:03:26'
    ),
    (
        3,
        4,
        1,
        5.00,
        '2024-11-19 16:03:39'
    ),
    (
        4,
        4,
        2,
        4.00,
        '2024-11-22 22:47:07'
    ),
    (
        5,
        4,
        3,
        4.00,
        '2024-11-22 22:51:41'
    ),
    (
        6,
        4,
        3,
        4.00,
        '2024-11-22 22:51:47'
    ),
    (
        7,
        4,
        4,
        4.00,
        '2024-11-22 22:54:13'
    ),
    (
        8,
        4,
        4,
        4.00,
        '2024-11-22 22:54:23'
    ),
    (
        9,
        4,
        5,
        4.00,
        '2024-11-22 22:56:24'
    ),
    (
        10,
        4,
        6,
        4.00,
        '2024-11-22 22:58:19'
    );
/*!40000 ALTER TABLE `embarque` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `horario_diario_saida`
--

DROP TABLE IF EXISTS `horario_diario_saida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `horario_diario_saida` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `linhas_id` int(10) unsigned NOT NULL,
    `horario_de_saida` time NOT NULL,
    `duracaoEstimada` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_horario_diario_saida_linhas1_idx` (`linhas_id`),
    CONSTRAINT `fk_horario_diario_saida_linhas1` FOREIGN KEY (`linhas_id`) REFERENCES `linhas` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `horario_diario_saida`
--

LOCK TABLES `horario_diario_saida` WRITE;
/*!40000 ALTER TABLE `horario_diario_saida` DISABLE KEYS */
;

INSERT INTO
    `horario_diario_saida`
VALUES (1, 11, '15:10:00', 44),
    (2, 12, '15:09:00', 44),
    (3, 13, '15:34:00', 34),
    (4, 14, '15:34:00', 324),
    (5, 15, '08:00:00', 30),
    (6, 15, '09:40:00', 35),
    (7, 15, '10:00:00', 30),
    (8, 15, '10:40:00', 35),
    (9, 15, '11:10:00', 30),
    (10, 16, '08:10:00', 30),
    (11, 16, '09:30:00', 30),
    (12, 16, '10:10:00', 30),
    (13, 16, '10:40:00', 30),
    (14, 16, '11:15:00', 35);
/*!40000 ALTER TABLE `horario_diario_saida` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `linhas`
--

DROP TABLE IF EXISTS `linhas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `linhas` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `numero_linha` int(11) NOT NULL,
    `bairroOrigem` varchar(45) NOT NULL,
    `bairroDestino` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 17 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `linhas`
--

LOCK TABLES `linhas` WRITE;
/*!40000 ALTER TABLE `linhas` DISABLE KEYS */
;

INSERT INTO
    `linhas`
VALUES (11, 145, 'tinga', 'centro'),
    (12, 145, 'centro', 'tinga'),
    (13, 150, 'centro', 'poiares'),
    (14, 150, 'poiares', 'centro'),
    (15, 100, 'Olaria', 'Tinga'),
    (16, 100, 'Tinga', 'Olaria');
/*!40000 ALTER TABLE `linhas` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `loja_recarga`
--

DROP TABLE IF EXISTS `loja_recarga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `loja_recarga` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(45) DEFAULT 'Tech Pass',
    `cep` varchar(9) DEFAULT NULL,
    `endereco` varchar(255) DEFAULT NULL,
    `lat` decimal(9, 6) DEFAULT NULL,
    `lng` decimal(9, 6) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `loja_recarga`
--

LOCK TABLES `loja_recarga` WRITE;
/*!40000 ALTER TABLE `loja_recarga` DISABLE KEYS */
;

INSERT INTO
    `loja_recarga`
VALUES (
        4,
        'Jardim',
        '116632-00',
        'Avenida Ipiranga, Jardim Casa Branca, Caraguatatuba, SP',
        -23.616264,
        -45.380836
    ),
    (
        6,
        'Indaiá',
        '116650-80',
        'Avenida Amazonas, Indaiá, Caraguatatuba, SP',
        -23.631562,
        -45.425143
    ),
    (
        7,
        'Recanto',
        '116762-39',
        'Rua Três, Recanto Som do Mar, Caraguatatuba, SP',
        -23.600689,
        -45.365169
    );
/*!40000 ALTER TABLE `loja_recarga` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `motorista`
--

DROP TABLE IF EXISTS `motorista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `motorista` (
    `superUser_id` int(10) unsigned NOT NULL,
    `cnh` varchar(11) DEFAULT NULL,
    PRIMARY KEY (`superUser_id`),
    CONSTRAINT `fk_motorista_superUser1` FOREIGN KEY (`superUser_id`) REFERENCES `superuser` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `motorista`
--

LOCK TABLES `motorista` WRITE;
/*!40000 ALTER TABLE `motorista` DISABLE KEYS */
;

INSERT INTO `motorista` VALUES (4, 'uy444415544'), (5, 'uy444415555');
/*!40000 ALTER TABLE `motorista` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `onibus`
--

DROP TABLE IF EXISTS `onibus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `onibus` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `placa` varchar(15) NOT NULL,
    `quantidade_passageiros` int(11) DEFAULT NULL,
    `estado_atual` varchar(20) DEFAULT NULL,
    `possui_acessibilidade` varchar(3) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `onibus`
--

LOCK TABLES `onibus` WRITE;
/*!40000 ALTER TABLE `onibus` DISABLE KEYS */
;

INSERT INTO
    `onibus`
VALUES (
        1,
        'PQR-4567',
        25,
        'Em operação',
        'nao'
    ),
    (
        4,
        'STU-9012',
        40,
        'Em operação',
        'sim'
    ),
    (
        5,
        'MNO-7890',
        30,
        'Funcionando',
        'sim'
    ),
    (
        6,
        'DEF-5678',
        25,
        'parado',
        'nao'
    );
/*!40000 ALTER TABLE `onibus` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `percurso`
--

DROP TABLE IF EXISTS `percurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `percurso` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `ordem_do_percurso` int(11) DEFAULT NULL,
    `linha_id` int(10) unsigned NOT NULL,
    `pontoOnibus_id` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_rotas_pontoOnibus1_idx` (`pontoOnibus_id`),
    KEY `fk_trajeto_paradas_linha1_idx` (`linha_id`),
    CONSTRAINT `fk_rotas_pontoOnibus1` FOREIGN KEY (`pontoOnibus_id`) REFERENCES `ponto_de_onibus` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_trajeto_paradas_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linhas` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 27 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `percurso`
--

LOCK TABLES `percurso` WRITE;
/*!40000 ALTER TABLE `percurso` DISABLE KEYS */
;

INSERT INTO
    `percurso`
VALUES (7, 1, 11, 1),
    (8, 2, 11, 4),
    (9, 1, 12, 1),
    (10, 2, 12, 1),
    (11, 1, 13, 2),
    (12, 1, 14, 1),
    (13, 1, 15, 1),
    (14, 2, 15, 2),
    (15, 3, 15, 5),
    (16, 4, 15, 3),
    (17, 5, 15, 9),
    (18, 6, 15, 7),
    (19, 7, 15, 9),
    (20, 1, 16, 11),
    (21, 2, 16, 10),
    (22, 3, 16, 8),
    (23, 5, 16, 7),
    (24, 6, 16, 6),
    (25, 7, 16, 5),
    (26, 7, 16, 1);
/*!40000 ALTER TABLE `percurso` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `ponto_de_onibus`
--

DROP TABLE IF EXISTS `ponto_de_onibus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `ponto_de_onibus` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `endereco` varchar(255) DEFAULT NULL,
    `cep` varchar(9) DEFAULT NULL,
    `lat` decimal(9, 6) DEFAULT NULL,
    `lng` decimal(9, 6) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 12 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `ponto_de_onibus`
--

LOCK TABLES `ponto_de_onibus` WRITE;
/*!40000 ALTER TABLE `ponto_de_onibus` DISABLE KEYS */
;

INSERT INTO
    `ponto_de_onibus`
VALUES (
        1,
        ' Rua José Herculano, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.459444,
        -45.060556
    ),
    (
        2,
        ' Avenida Dr. Arthur Costa Filho, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.461056,
        -45.061111
    ),
    (
        3,
        ' Rua Paulo Ferraz da Silva, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.452778,
        -45.056111
    ),
    (
        4,
        ' Rua Nereu de Oliveira Ramos, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.451111,
        -45.055000
    ),
    (
        5,
        ' Rua Miguel Varlez, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.456111,
        -45.058333
    ),
    (
        6,
        ' Avenida Maestro Heitor de Carvalho, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.449444,
        -45.053889
    ),
    (
        7,
        ' Avenida Rio de Janeiro, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.457778,
        -45.059444
    ),
    (
        8,
        ' Avenida Alves da Silva Coutinho, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.446111,
        -45.051667
    ),
    (
        9,
        ' Rodovia Ubatuba-Caraguatatuba SP-055, undefined, Caraguatatuba, SP',
        '11665-000',
        NULL,
        NULL
    ),
    (
        10,
        ' Rua Manoel Ricardo Francisco, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.447778,
        -45.052778
    ),
    (
        11,
        ' Avenida Prestes Maia, Centro, Caraguatatuba, SP',
        '11665-000',
        -23.454444,
        -45.057222
    );
/*!40000 ALTER TABLE `ponto_de_onibus` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `superuser`
--

DROP TABLE IF EXISTS `superuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `superuser` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `email` varchar(64) NOT NULL,
    `senha` varchar(100) DEFAULT NULL,
    `nome` varchar(100) NOT NULL,
    `nascimento` date NOT NULL,
    `cpf` varchar(14) NOT NULL,
    `foto` varchar(200) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `superuser`
--

LOCK TABLES `superuser` WRITE;
/*!40000 ALTER TABLE `superuser` DISABLE KEYS */
;

INSERT INTO
    `superuser`
VALUES (
        1,
        'atendente@gmail.com',
        '$2a$10$mFw6he0Sbc7M26LanAvKt.BAWATQ2BHBwa.G5sOUxiuN/9d6lNvEG',
        'Juliana',
        '2002-01-12',
        '145.876.321-09',
        'foto_atendentes/Juliana_1732024902362.jpg'
    ),
    (
        2,
        'rose@gmail.com',
        '$2a$10$MhRAxlw/zL3hFz.7..IGr.SPhe1Rq4cMbxbO6gV4CohL79xz7n1zu',
        'rose',
        '2003-02-12',
        '789.654.128-30',
        'foto_atendentes/rose_1732024921494.jpg'
    ),
    (
        4,
        'motorista@gmail.com',
        '$2a$10$u1pwVn6DXO7ewtTV5klso.MTrIBPPbiVXmXTZhJnakhT.7Aeo7oom',
        'Francisco',
        '2003-06-12',
        '146.987.325-75',
        'foto_motoristas/Francisco_1732026535204.jpg'
    ),
    (
        5,
        'gerson@gmail.com',
        '$2a$10$Whurog.7MmYKidydOZRPIeX2ViRyBciJRi1tM7djQBg7vL2XX/Zj2',
        'gerson',
        '2002-06-12',
        '596.875.245-86',
        'foto_motoristas/gerson_1732026544393.jpg'
    ),
    (
        7,
        'gerente@techpass.com',
        '$2a$10$pHH/dIY3IVAAOgNrt/YuA.aJMORcxjXZqE7UOgwwHg.YBtqGL57vS',
        'Gerente',
        '1990-01-01',
        '123.456.789-01',
        'foto_adm/adm.jpg'
    );
/*!40000 ALTER TABLE `superuser` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `tipos_de_cartao`
--

DROP TABLE IF EXISTS `tipos_de_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `tipos_de_cartao` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `modalidade` varchar(45) NOT NULL,
    `tarifa` decimal(6, 2) DEFAULT NULL,
    `tipos_de_cartaocol` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `tipos_de_cartao`
--

LOCK TABLES `tipos_de_cartao` WRITE;
/*!40000 ALTER TABLE `tipos_de_cartao` DISABLE KEYS */
;

INSERT INTO
    `tipos_de_cartao`
VALUES (1, 'comum', 4.00, NULL),
    (2, 'estudante', 2.50, NULL),
    (3, 'pcd', 0.00, NULL);
/*!40000 ALTER TABLE `tipos_de_cartao` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `viagem`
--

DROP TABLE IF EXISTS `viagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;

CREATE TABLE `viagem` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `inicio` datetime DEFAULT current_timestamp(),
    `duracao` int(11) DEFAULT NULL,
    `linhas_id` int(10) unsigned DEFAULT NULL,
    `onibus_id` int(11) DEFAULT NULL,
    `motorista_SU_id` int(10) unsigned DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_viagem_linhas1_idx` (`linhas_id`),
    KEY `fk_viagem_motorista1_idx` (`motorista_SU_id`),
    KEY `fk_viagem_onibus1_idx` (`onibus_id`),
    CONSTRAINT `fk_viagem_linhas1` FOREIGN KEY (`linhas_id`) REFERENCES `linhas` (`id`) ON DELETE SET NULL,
    CONSTRAINT `fk_viagem_motorista1` FOREIGN KEY (`motorista_SU_id`) REFERENCES `motorista` (`superUser_id`) ON DELETE SET NULL,
    CONSTRAINT `fk_viagem_onibus1` FOREIGN KEY (`onibus_id`) REFERENCES `onibus` (`id`) ON DELETE SET NULL
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `viagem`
--

LOCK TABLES `viagem` WRITE;
/*!40000 ALTER TABLE `viagem` DISABLE KEYS */
;

INSERT INTO
    `viagem`
VALUES (
        1,
        '2024-11-19 16:00:06',
        4724,
        15,
        1,
        4
    ),
    (
        2,
        '2024-11-22 22:47:01',
        1,
        16,
        1,
        4
    ),
    (
        3,
        '2024-11-22 22:51:31',
        1,
        15,
        1,
        4
    ),
    (
        4,
        '2024-11-22 22:54:07',
        1,
        16,
        1,
        4
    ),
    (
        5,
        '2024-11-22 22:56:19',
        1,
        16,
        1,
        4
    ),
    (
        6,
        '2024-11-22 22:58:15',
        1,
        16,
        1,
        4
    );
/*!40000 ALTER TABLE `viagem` ENABLE KEYS */
;

UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2024-11-23  1:31:48