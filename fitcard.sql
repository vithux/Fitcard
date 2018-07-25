# Host: localhost  (Version 5.5.5-10.1.34-MariaDB)
# Date: 2018-07-24 22:58:24
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "empresas"
#

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE `empresas` (
  `razaoSocial` varchar(255) DEFAULT NULL,
  `nomeFantasia` varchar(255) DEFAULT NULL,
  `cnpj` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `agencia` varchar(255) DEFAULT NULL,
  `conta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cnpj`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "empresas"
#

INSERT INTO `empresas` VALUES ('Borges','Testadores LTDA','12.870.330/0001-17','borges@testa.ong','av. da unicamp, 22','campinas','são paulo','(19) 99123-9925','22/08/2017','Borracharia','Ativo','000-1','00.002-1'),('Vitor','Devs S.A.','69.620.338/0001-42','vitor@devssa.com','av. dos loucos, 33','campinas','são paulo','(19) 3387-9925','23/07/2018','Supermercado','Ativo','000-1','00.001-1');
