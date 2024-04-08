SELECT * FROM itemcardapio;

SELECT * FROM clientes;

-- INSERT INTO itemcardapio(nome, valor, categoria, status, descricao) VALUES(?, ?, ?, ?, ?);

-- UPDATE itemcardapio SET nome = ?, valor = ?, categoria = ?, status = ?, descricao = ? WHERE idItemCardapio = ?;

-- DELETE FROM itemcardapio WHERE idItemCardapio = ?


SELECT nome 
FROM itemcardapio 
WHERE idItemCardapio = (
    SELECT itemCardapio
    FROM preferencia
    GROUP BY itemCardapio
    ORDER BY COUNT(idPreferencia) DESC
    LIMIT 1
);

Select cliente.id, pessoas.nome FROM restaurant.cliente
INNER JOIN restaurant.pessoas ON cliente.id = pessoas.id;