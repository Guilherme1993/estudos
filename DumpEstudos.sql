CREATE DATABASE  IF NOT EXISTS `estudos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `estudos`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: estudos
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
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `cur_codigo` int NOT NULL AUTO_INCREMENT,
  `cur_descricao` varchar(30) NOT NULL,
  `cur_duracao` int DEFAULT NULL,
  `cur_area` varchar(15) DEFAULT NULL,
  `cur_periodo` varchar(15) DEFAULT NULL,
  `fac_codigo` int DEFAULT NULL,
  PRIMARY KEY (`cur_codigo`),
  KEY `fac_codigo_idx` (`fac_codigo`),
  CONSTRAINT `fac_codigo` FOREIGN KEY (`fac_codigo`) REFERENCES `faculdade` (`fac_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (3,'Análise Desenv. Sistemas',6,'exatas','noite',1),(4,'Ciência Computação',10,'exatas','noite',2),(5,'Fisica',8,'exatas','manhã',3);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculdade`
--

DROP TABLE IF EXISTS `faculdade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculdade` (
  `fac_codigo` int NOT NULL AUTO_INCREMENT,
  `fac_nome` varchar(30) NOT NULL,
  `fac_apelido` varchar(15) DEFAULT NULL,
  `fac_diretor` varchar(30) DEFAULT NULL,
  `fac_cidade` varchar(20) DEFAULT NULL,
  `fac_estado` char(2) DEFAULT NULL,
  PRIMARY KEY (`fac_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculdade`
--

LOCK TABLES `faculdade` WRITE;
/*!40000 ALTER TABLE `faculdade` DISABLE KEYS */;
INSERT INTO `faculdade` VALUES (1,'Fatec','Fatec Franca','Fernando','Franca','SP'),(2,'Universidade Franca','Unifran','Maria','Franca','SP'),(3,'Universidade São Paulo','USP','João','São Carlos','SP');
/*!40000 ALTER TABLE `faculdade` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 10:59:02
