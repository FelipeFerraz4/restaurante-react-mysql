DROP SCHEMA restaurant;
CREATE SCHEMA restaurant;
USE restaurant;
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlroot';

CREATE TABLE restaurant.pessoas (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  dataNascimento DATE NULL
);

CREATE TABLE restaurant.cliente (
  id INT NOT NULL PRIMARY KEY,
  cpf CHAR(11) NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(16) NOT NULL,
  FOREIGN KEY (id) REFERENCES pessoas (id)
);


CREATE TABLE restaurant.fornecedores (
  id INT NOT NULL PRIMARY KEY,
  categoriaProduto VARCHAR(50) NOT NULL,
  cnpj CHAR(14) NOT NULL,
  FOREIGN KEY (id) REFERENCES pessoas (id)
);

CREATE TABLE restaurant.cargos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  descricao TEXT NOT NULL,
  salario DECIMAL(10, 2) NOT NULL,
  permissao VARCHAR(50) NOT NULL
);

CREATE TABLE restaurant.funcionarios (
  id INT NOT NULL PRIMARY KEY,
  carteiraTrabalho VARCHAR(11) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(16) NOT NULL,
  cpf CHAR(11) NOT NULL,
  cargo INT NOT NULL,
  FOREIGN KEY (id) REFERENCES pessoas (id),
  FOREIGN KEY (cargo) REFERENCES cargos (id)
);

CREATE TABLE restaurant.itemcardapio (
  idItemCardapio INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  status VARCHAR(50) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  PRIMARY KEY (idItemCardapio));

CREATE TABLE restaurant.contatos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  telefone VARCHAR(13),
  email VARCHAR(100),
  pessoa INT NOT NULL,
  dataHora DATETIME NOT NULL,
  FOREIGN KEY (pessoa) REFERENCES pessoas (id)
);

CREATE TABLE restaurant.enderecos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cep CHAR(8) NOT NULL,
  estado VARCHAR(50),
  cidade VARCHAR(50),
  bairro VARCHAR(100),
  rua VARCHAR(100),
  numero INT,
  complemento VARCHAR(100)
);

CREATE TABLE restaurant.pessoasEndereco (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pessoa INT NOT NULL,
  endereco INT NOT NULL,
  dataHora DATETIME NOT NULL,
  FOREIGN KEY (pessoa) REFERENCES pessoas (id),
  FOREIGN KEY (endereco) REFERENCES enderecos (id)
);

CREATE TABLE restaurant.transacoes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  remetente INT NOT NULL,
  destinatario INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  dataHora DATETIME NOT NULL,
  meio VARCHAR(50) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  FOREIGN KEY (remetente) REFERENCES pessoas (id),
  FOREIGN KEY (destinatario) REFERENCES pessoas (id)
);






CREATE TABLE restaurant.preferencia (
  idPreferencia int NOT NULL AUTO_INCREMENT,
  itemCardapio int NOT NULL,
  cliente int NOT NULL,
  dataHora datetime NOT NULL,
  PRIMARY KEY (idPreferencia),
  FOREIGN KEY (cliente) REFERENCES cliente (id),
  FOREIGN KEY (itemCardapio) REFERENCES itemcardapio (idItemCardapio)
);

CREATE TABLE restaurant.mesa (
  id INT NOT NULL AUTO_INCREMENT,
  capacidade INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE restaurant.pedidos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  funcionario INT NOT NULL,
  cliente INT NOT NULL,
  dataHora DATETIME NOT NULL,
  status VARCHAR(50) NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente (id),
  FOREIGN KEY (funcionario) REFERENCES funcionarios (id)
);

CREATE TABLE restaurant.itensEstoque (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL
);






CREATE TABLE restaurant.reserva (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cliente INT NOT NULL,
  mesa INT NOT NULL,
  dataHora DATETIME NOT NULL,
  adiantamento DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente (id),
  FOREIGN KEY (mesa) REFERENCES mesa (id)
);

CREATE TABLE restaurant.contem (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  itemCardapio INT NOT NULL,
  pedido INT NOT NULL,
  dataHora DATETIME NOT NULL,
  FOREIGN KEY (itemcardapio) REFERENCES itemCardapio (idItemCardapio),
  FOREIGN KEY (pedido) REFERENCES pedidos (id)
);

CREATE TABLE restaurant.preparar (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  itemCardapio INT NOT NULL,
  itemEstoque INT NOT NULL,
  dataHora DATETIME NOT NULL,
  FOREIGN KEY (itemCardapio) REFERENCES itemCardapio (idItemCardapio),
  FOREIGN KEY (itemEstoque) REFERENCES itensEstoque (id)
);


CREATE TABLE restaurant.entregas (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecedor INT NOT NULL,
  itemEstoque INT NOT  NULL,
  dataHoraSaida DATETIME,
  dataHoraEntrega DATETIME,
  meioEntrega VARCHAR(50),
  FOREIGN KEY (fornecedor) REFERENCES fornecedores (id),
  FOREIGN KEY (itemEstoque) REFERENCES itensEstoque (id)
);

CREATE INDEX idx_cliente_cpf ON restaurant.cliente (cpf);
CREATE INDEX idx_cliente_email ON restaurant.cliente (email);

CREATE INDEX idx_preferencia_cliente ON restaurant.preferencia (cliente);
CREATE INDEX idx_preferencia_item_cardapio ON restaurant.preferencia (itemCardapio);

CREATE INDEX idx_transacoes_remetente ON restaurant.transacoes (remetente);
CREATE INDEX idx_transacoes_destinatario ON restaurant.transacoes (destinatario);

CREATE INDEX idx_funcionarios_cpf ON restaurant.funcionarios (cpf);
CREATE INDEX idx_funcionarios_cargo ON restaurant.funcionarios (cargo);

CREATE INDEX idx_fornecedores_cnpj ON restaurant.fornecedores (cnpj);




