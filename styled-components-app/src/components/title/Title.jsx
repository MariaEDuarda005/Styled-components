import styled from 'styled-components'


// componente é criado
const Title = styled.h1`
    color: ${props => props.theme.colors.primaty};

    /* Condição para mudar a cor do texto para branco quando o tema é escuro */
    ${props => props.theme.colors.background === props.theme.colors.black && `
        color: ${props.theme.colors.white};
    `}
`

Title.defaultProps = {
    children: 'Meu titulo teste'
}

export default Title;