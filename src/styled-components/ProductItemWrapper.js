import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: #fff;

  &:hover {
    transform: translateY(-3px);
  }
  h2{
    font-size: 20px;
    text-align: center;
  }
  .price_cart{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .price_cart button{
    color: black;
    font-size: 15px;
    margin-left: 8px;
    padding: 0.25rem 0.5rem;
    background-color: #b5b5b5;
    border-radius: 10px;
  }
  button:hover{
    background-color: #484545;
    color: #f3f3f3;
  }

`


export default ProductItemWrapper