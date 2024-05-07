import styled from 'styled-components'


// componente é criado
const Title = styled.h1`
    color: ${props => props.theme.colors.black};
 
    /* Condição para mudar a cor do texto para branco quando o tema é escuro */
    ${props => props.theme.isDark && `
        color: ${props.theme.colors.white};
    `}

    @media (max-width: 1020px) {
        font-size: 25px;
      }


    @media (max-width: 600px) {
        font-size: 15px;
      }
`

Title.defaultProps = {
    children: 'All white?'
}

export default Title;