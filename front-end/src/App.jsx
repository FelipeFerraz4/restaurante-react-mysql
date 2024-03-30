import styled from 'styled-components';
import GlobalStyle from './styles/global.js';

import { ToastContainer } from 'react-toastify';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Home/>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App;
