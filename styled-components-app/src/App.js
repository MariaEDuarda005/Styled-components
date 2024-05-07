import { useState } from 'react'; 
import { ThemeProvider, createGlobalStyle } from 'styled-components'; 
import Title from './components/title/Title';
import Button from './components/button/Button';
import theme, {darkThemeColors} from './theme'; // dentro do provedor todos os compenentes vão receber este parametro

// createGlobalStyle - constante, trocando o css da pagina inteira 

const GlobalStyle = createGlobalStyle`
  html, body{
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkThemeColors
  }
}

function App() {
  const [activeTheme, setActiveTheme] = useState(theme)

  const handleTheme = () => {
    if(activeTheme === theme){
      setActiveTheme(darkTheme)
    } else {
      setActiveTheme(theme)
    }
  }


  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle/>
      <div className="App">
        <Title theme={activeTheme}/>
        <Button onClick={handleTheme}>Mudar o tema</Button>
        <Title>Outro titulo</Title>
      </div>
    </ThemeProvider>
  );
}

export default App;
