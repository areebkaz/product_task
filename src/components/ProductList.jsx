import React, { useState, useEffect } from 'react';
import Pagination from 'react-paginate';
import SortOptions from '../styled-components/Sort';
import ProductListWrapper from '../styled-components/ProductListWrapper';
import ProductItem from './ProductItem';

const ProductList = ({ products, currentPage, productsPerPage, onPageChange }) => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState('price');
  const [isAscending, setIsAscending] = useState(true);

  // Sort products whenever sortType or isAscending changes
  useEffect(() => {
    const sorted = [...products].sort((a, b) => {
      if (sortType === 'price') {
        return isAscending ? a.price - b.price : b.price - a.price;
      } else if (sortType === 'title') {
        return isAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
      return 0;
    });
    setSortedProducts(sorted);
  }, [sortType, isAscending, products]);

  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  return (
    <>
      <SortOptions>
        <label>Sort by:</label>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
        <button onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? 'Ascending' : 'Descending'}
        </button>
      </SortOptions>
      <ProductListWrapper>
      {sortedProducts
        .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
        .map((product) => (
          
          <ProductItem key={product.id} product={product} />
          
        ))}
      </ProductListWrapper>
      {products.length > 0 && (
        <Pagination
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(sortedProducts.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      )}
    </>
  );
};

export default ProductList;
