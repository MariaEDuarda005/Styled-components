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

    @media (max-width: 1020px) {
        padding: 15px 25px;
        font-size: 15px;
      }

    @media (max-width: 600px) {
        padding: 10px 20px;
        font-size: 10px;
      }
`

export default Button