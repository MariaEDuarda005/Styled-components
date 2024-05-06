import styled from 'styled-components'

// componente é criado
const Title = styled.h1`
    color: blue;
    font-size: 25px;
`

Title.defaultProps = {
    children: 'Meu titulo teste'
}

export default Title