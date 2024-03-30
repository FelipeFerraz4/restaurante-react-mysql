import styled from 'styled-components';
import GlobalStyle from './styles/global.js';

import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getClientes } from './services/requests/cliente/index.js';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  const [clientes, setClientes] = useState([]);

  async function cliente() {
      const res = await getClientes();
      setClientes(res);
  }

  useEffect(() => {
    cliente();
  }, [setClientes]);

  return (
    <>
      <Container>
        {clientes.map((item) => (
          <div key={item.idcliente}>
            <h1>{item.nome} - {item.cpf}</h1>
          </div>
        ))}
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App;
