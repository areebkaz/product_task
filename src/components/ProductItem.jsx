import React from 'react';
import ProductImage from '../styled-components/ProductImage';
import ProductItemWrapper from '../styled-components/ProductItemWrapper';

const ProductItem = ({ product }) => {
  return (
    <ProductItemWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <h2 style={{marginBottom:'5px'}}>
        {product.title.length <= 10
          ? product.title
          : product.title.slice(0, 20) + '...'
        }
      </h2>
      <p>
        {product.description.length <= 50
          ? product.description
          : product.description.slice(0, 50) + '....'
        }
      </p>
      <hr style={{ marginTop: '8px' }} />
      <div className='price_cart'>
        <p style={{ fontSize: '20px' }}>Rs.{product.price}/-</p>
        <button>Add to cart</button>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
