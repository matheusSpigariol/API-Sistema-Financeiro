-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemafinanceiro
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` text COLLATE utf8_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Salário','2022-02-14 19:58:47','2022-02-14 19:58:47'),(2,'Poupança','2022-02-14 19:58:52','2022-02-14 19:58:52'),(3,'Investimentos','2022-02-14 19:58:58','2022-02-14 19:58:58'),(4,'Contas','2022-02-14 19:59:06','2022-02-14 19:59:06'),(5,'Compras','2022-02-14 19:59:36','2022-02-14 19:59:36'),(6,'Viagem','2022-02-14 20:00:03','2022-02-14 20:00:03');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contatos`
--

DROP TABLE IF EXISTS `contatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contatos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text COLLATE utf8_unicode_ci,
  `email` text COLLATE utf8_unicode_ci,
  `mensagem` text COLLATE utf8_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contatos`
--

LOCK TABLES `contatos` WRITE;
/*!40000 ALTER TABLE `contatos` DISABLE KEYS */;
INSERT INTO `contatos` VALUES (1,'Matheus Eduardo Spigariol','contato.matheused@gmail.com','teste','2022-02-14 21:58:13','2022-02-14 21:58:13'),(2,'Leonardo','leonardo@gmail.com','teste2','2022-02-14 22:20:48','2022-02-14 22:20:48');
/*!40000 ALTER TABLE `contatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token-blacklists`
--

DROP TABLE IF EXISTS `token-blacklists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token-blacklists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` text COLLATE utf8_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token-blacklists`
--

LOCK TABLES `token-blacklists` WRITE;
/*!40000 ALTER TABLE `token-blacklists` DISABLE KEYS */;
/*!40000 ALTER TABLE `token-blacklists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transacoes`
--

DROP TABLE IF EXISTS `transacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text COLLATE utf8_unicode_ci,
  `valor` float DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoria` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacoes`
--

LOCK TABLES `transacoes` WRITE;
/*!40000 ALTER TABLE `transacoes` DISABLE KEYS */;
INSERT INTO `transacoes` VALUES (7,'Conta de luz',50,'saida',4,'2022-02-14 21:00:18','2022-02-14 21:14:47'),(8,'Viagem',200,'saida',6,'2022-02-14 21:15:05','2022-02-14 22:14:14'),(9,'Compras',500,'saida',5,'2022-02-14 21:20:37','2022-02-14 21:20:37'),(10,'Compras',500,'saida',5,'2022-02-14 21:22:53','2022-02-14 21:22:53'),(11,'Salario do mes',5000,'entrada',1,'2022-02-14 21:47:08','2022-02-14 21:47:08'),(13,'Investimento bombcrypto',250,'entrada',1,'2022-02-15 21:26:43','2022-02-15 21:26:43'),(14,'Investimento bombcrypto',250,'entrada',1,'2022-02-15 21:34:45','2022-02-15 21:34:45'),(15,'Investimento bombcrypto',250,'entrada',1,'2022-02-15 21:36:23','2022-02-15 21:36:23'),(16,'Investimento bombcrypto',500,'entrada',1,'2022-02-15 21:36:31','2022-02-15 21:36:31'),(17,'Investimento bombcrypto',500,'entrada',1,'2022-02-15 21:37:59','2022-02-15 21:37:59');
/*!40000 ALTER TABLE `transacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text COLLATE utf8_unicode_ci,
  `senha` text COLLATE utf8_unicode_ci,
  `email` text COLLATE utf8_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (6,'Matheus Eduardo Spigariol','2c99884bd1d149755103104bab6b93ee','contato.matheused@gmail.com','2022-02-15 17:27:11','2022-02-15 17:43:38'),(7,'Matheus Eduardo','2149e70233847d9fb46230933f80cabd','matheuseduardospigariol@gmail.com','2022-02-15 17:44:00','2022-02-15 17:45:16');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-16  9:19:29
