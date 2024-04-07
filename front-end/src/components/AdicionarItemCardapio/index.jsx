import { useState } from 'react';
export default function AdicionarItemCardapio() {
    const [name, setName] = useState('')

    function handleAddItem() {

    }

    return(
        <div>
            <h3>Adicionar Item do Cardapio</h3>
            <form action="">
                <div className="mx-3">
                    <label htmlFor="name" className="form-label">Nome:</label>
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Nome do produto" />
                </div>
                <div className="mx-3">
                    <label htmlFor="price" className="form-label">Preço:</label>
                    <input type="number" step='0.01' className="form-control" id="price" placeholder="Preço do item" />
                </div>
                <div className="mx-3">
                    <label htmlFor="category" className="form-label">Categoria:</label>
                    <select className="form-select" aria-label="Default select example" id="category">
                        <option selected>Escolha a categoria do produto</option>
                        <option value="bebida">Bebida</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Sobremesa">Sobremesa</option>
                    </select>
                </div>
                <div className="mx-3">
                    <label htmlFor="status" className="form-label">Status do Item Cardapio:</label>
                    <select className="form-select" aria-label="Default select example" id="status">
                        <option selected>Informe o status do item no cardapio</option>
                        <option value="Disponível">Disponível</option>
                        <option value="Indisponível">Indisponível</option>
                        <option value="Esgotado">Esgotado</option>
                        <option value="Novidade">Novidade</option>
                        <option value="Recomendado">Recomendado</option>
                        <option value="Promoção">Promoção</option>
                    </select>
                </div>
                <div className="mx-3">
                    <label htmlFor="description" className="form-label">Descrição:</label>
                    <input type="text" className="form-control" id="description" placeholder="Descreva o item do pedido" />
                </div>
                <div className="my-3">
                    <button onClick={handleAddItem} type="button" className="btn btn-primary mx-2">Adicionar</button>
                </div>
            </form>
        </div>
    )
}