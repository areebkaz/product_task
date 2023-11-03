import styled, { css } from "styled-components";

const responsiveStyles = css`
  margin: 10px 1rem;
  justify-content: start;
  input{
    width: 17rem;
  }
  button{
    margin-left: 3px;
    font-weight: 400;
  }
  button:hover{
    background-color: black;
    color: #fff;
  }
`

const SearchProduct = styled.div`
    display: flex;
    justify-content: center;
    flex: auto;
    margin: 10px 0;
    input{
        width: 25rem;
        padding: 0.5em 0;
        border-radius: 5px;
    }
    input:hover{
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    button{
        padding: 0.5rem;
        cursor: pointer;
        font-size: 15px;
        font-weight: 900;
        background-color: white;
        margin-left: 0.3rem;
        border-radius: 10px;
        color: black;
    }
    button:hover{
        background-color: black;
        color: white;
        border-radius: 10px;
    }
    @media (max-width: 498px) {
    ${responsiveStyles}
  }
`

export default SearchProduct