import { useState } from 'react'; 
import { ThemeProvider, createGlobalStyle } from 'styled-components'; 
import styled from 'styled-components';
import Title from './components/title/Title';
import Button from './components/button/Button';
import theme, { darkThemeColors } from './theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkThemeColors
  }
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.gray};
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  max-width: 600px; /* Defina a largura máxima da caixa */
  width: 100%; /* Faz com que a caixa ocupe toda a largura disponível */
  
  /* Centraliza a caixa */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* Responsivo */
  @media (max-width: 1020px) {
    padding: 15px;
    margin: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
    margin: 10px;
  }
`;

function App() {
  const [activeTheme, setActiveTheme] = useState(theme)

  const handleTheme = () => {
    setActiveTheme(activeTheme === theme ? darkTheme : theme);
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle/>
      
      <div className="App">
        <Container>
          <Title theme={activeTheme}/>
          <Button onClick={handleTheme}>Or</Button>
          <Title>All black?</Title>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
