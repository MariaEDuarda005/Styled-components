import styled from "styled-components";


//styled.button button é o nome do componente que queremos usar
const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    padding: 20px 30px;
    border: 0;
    color: ${props => props.theme.colors.white};
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
`

export default Button