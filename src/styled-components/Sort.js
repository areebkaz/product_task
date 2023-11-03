import styled, { css } from "styled-components";

const responsiveStyles = css`
  font-weight: 400;
  font-size: 15px;
  select{
    font-size: 15px;
  }
  button{
    font-size: 15px;
    font-weight: 400;
  }
`

const SortOptions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 1rem;
  font-size: 20px;
  font-weight: 400;

  label {
    margin-right: 10px;
  }

  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: white;
    color: black;
    border: none;
    margin-left: 1em;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: white;
    }
  }
  @media (max-width: 500px) {
  ${responsiveStyles}
}
`

export default SortOptions