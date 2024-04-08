import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { newItemCardapios, updateItemCardapios } from '../../services/requests/cardapio';

AdicionarItemCardapio.propTypes = {
    index: PropTypes.number,
    setIndex: PropTypes.func,
    cardapio: PropTypes.array
};

export default function AdicionarItemCardapio({index, setIndex, cardapio}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [erro, setErro] = useState('');
    const [button, setButton] = useState('Adicionar')

    async function newItemCardapio(item) {
        const res = await newItemCardapios(item);
        console.log(res);
    }

    function clearInfo() {
        setName('');
        setPrice('');
        setCategory('');
        setStatus('');
        setDescription('');
    }

    useEffect(() => {
        console.log(index);
        if(index != 0){
            // console.log(cardapio[index-1].descricao);
            setName(cardapio[index-1].nome);
            setPrice(cardapio[index-1].valor);
            setCategory(cardapio[index-1].categoria);
            setStatus(cardapio[index-1].status);
            setDescription(cardapio[index-1].descricao);
            setButton('Atualizar');
        } else {
            setButton('Adicionar');
        }
    
      return () => {
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])
    

    function handleAddItem() {
        if(index!=0) {
            if(name!="" && price!=0 && category!='' && status!=''&& description!='') {
                updateItemCardapios({
                    name: name,
                    price: price,
                    category: category,
                    status: status,
                    description: description
                }, index);
                setIndex(0);
            }
        } else {
            if(name!="" && price!=0 && category!='' && status!=''&& description!='') {
                newItemCardapio({
                    name: name,
                    price: price,
                    category: category,
                    status: status,
                    description: description
                })
                setErro('Adicionado com sucesso');
            } else {
                setErro('Erro: Campos vazio');
            }
        }
        clearInfo();
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
                    <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" step='0.01' className="form-control" id="price" placeholder="Preço do item" />
                </div>
                <div className="mx-3">
                    <label htmlFor="category" className="form-label">Categoria:</label>
                    <select value={category} onChange={(event) => setCategory(event.target.value)} className="form-select" aria-label="Default select example" id="category">
                        <option selected>Escolha a categoria do produto</option>
                        <option value="Bebidas">Bebida</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Sobremesa">Sobremesa</option>
                    </select>
                </div>
                <div className="mx-3">
                    <label htmlFor="status" className="form-label">Status do Item Cardapio:</label>
                    <select value={status} onChange={(event) => setStatus(event.target.value)} className="form-select" aria-label="Default select example" id="status">
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
                    <input value={description} onChange={(event) => setDescription(event.target.value)} type="text" className="form-control" id="description" placeholder="Descreva o item do pedido" />
                </div>
                <div className="m-3">
                    <h6>{erro}</h6>
                </div>
                <div className="m-2">
                    <button onClick={handleAddItem} type="button" className="btn btn-primary mx-2">{button}</button>
                </div>
            </form>
        </div>
    )
}
