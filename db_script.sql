CREATE SCHEMA `restaurant` ;
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlroot';
CREATE TABLE `restaurant`.`clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `cpf` CHAR(11) NULL,
  `dataNascimento` DATE NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`idCliente`));

INSERT INTO `restaurant`.`clientes` (`idCliente`, `nome`, `cpf`, `dataNascimento`, `email`, `senha`) VALUES ('1', 'felipe', '74475359074', '1994-01-05', 'felipe@gmail.com', 'restaurant');
INSERT INTO `restaurant`.`clientes` (`idCliente`, `nome`, `cpf`, `dataNascimento`, `email`, `senha`) VALUES ('2', 'marcondes', '50994895089', '2000-09-08', 'marcondes@gmail.com', 'restaurant');
INSERT INTO `restaurant`.`clientes` (`idCliente`, `nome`, `cpf`, `dataNascimento`, `email`, `senha`) VALUES ('3', 'paulo', '61600041078', '2006-02-11', 'paulo@gmail.com', 'restaurant');

CREATE TABLE `restaurant`.`itemcardapio` (
  `idItemCardapio` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idItemCardapio`));

INSERT INTO `restaurant`.`itemcardapio` (`idItemCardapio`, `nome`, `valor`, `categoria`, `status`, `descricao`) VALUES ('1', 'água', '2.00', 'bebidas', 'ativo', '500ml');
INSERT INTO `restaurant`.`itemcardapio` (`idItemCardapio`, `nome`, `valor`, `categoria`, `status`, `descricao`) VALUES ('2', 'cajuina', '8.00', 'bebidas', 'ativo', '1L e 2L');
INSERT INTO `restaurant`.`itemcardapio` (`idItemCardapio`, `nome`, `valor`, `categoria`, `status`, `descricao`) VALUES ('3', 'coca-cola', '8.00', 'bebidas', 'ativo', 'lata, 1L e 2L');
INSERT INTO `restaurant`.`itemcardapio` (`idItemCardapio`, `nome`, `valor`, `categoria`, `status`, `descricao`) VALUES ('4', 'fanta', '8.00', 'bebidas', 'ativo', 'lata, 1l e 2l');
